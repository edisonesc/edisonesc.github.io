import { type CollectionEntry, getCollection, getEntries } from "astro:content";
import techSource from "../data/technologies.yaml?raw";
import { toMonthIndex } from "./dates";

export type Technology = CollectionEntry<"technologies">;
export type Project = CollectionEntry<"projects">;
export type Experience = CollectionEntry<"experience">;

const newestFirst = <T extends { data: { start: string; end: string } }>(a: T, b: T) =>
	toMonthIndex(b.data.end) - toMonthIndex(a.data.end) || toMonthIndex(b.data.start) - toMonthIndex(a.data.start);

export async function getProjects({ forCv = false } = {}) {
	const all = await getCollection("projects", (p) => !forCv || !p.data.cvExclude);
	return Promise.all(
		all.sort(newestFirst).map(async (p) => ({ ...p, technologies: await getEntries(p.data.technologies) })),
	);
}
export type ProjectWithTech = Awaited<ReturnType<typeof getProjects>>[number];

export async function getExperience({ forCv = false } = {}) {
	const all = (await getCollection("experience", (e) => !forCv || !e.data.cvExclude)).sort(newestFirst);
	const of = (...types: Experience["data"]["type"][]) => all.filter((e) => types.includes(e.data.type));
	return {
		work: of("direct", "outsourcing", "intern"),
		education: of("education"),
		training: of("training"),
	};
}

export const TECH_GROUPS = [
	{ key: "frontend", label: "Frontend" },
	{ key: "backend", label: "Backend" },
	{ key: "devops", label: "DevOps" },
	{ key: "exploratory", label: "Exploratory" },
	{ key: "approach", label: "Engineering approach" },
] as const;

/** Collections come back sorted by id; Skills follow the order written in technologies.yaml. */
const FILE_ORDER = new Map([...techSource.matchAll(/^([\w-]+):/gm)].map((m, i) => [m[1], i]));

/**
 * Skills data: every listed (non-hidden) technology, per group, in the order of technologies.yaml,
 * with how many projects use it.
 */
export async function getTechGroups({ forCv = false } = {}) {
	const [techs, projects] = await Promise.all([getCollection("technologies"), getCollection("projects")]);
	const usage = new Map<string, number>();
	for (const p of projects) for (const t of p.data.technologies) usage.set(t.id, (usage.get(t.id) ?? 0) + 1);

	const listed = techs
		.filter((t) => !t.data.hidden && !(forCv && t.data.cvExclude))
		.map((t) => ({ ...t, usage: usage.get(t.id) ?? 0 }))
		.sort((a, b) => (FILE_ORDER.get(a.id) ?? 0) - (FILE_ORDER.get(b.id) ?? 0));

	return TECH_GROUPS.map((g) => ({ ...g, items: listed.filter((t) => t.data.group === g.key) })).filter(
		(g) => g.items.length > 0,
	);
}

/** Bullets to print on the CV: `cvHighlights` when given, else the site's bullets. */
export function cvBullets(b: { highlights: string[]; cvHighlights?: string[] }) {
	return b.cvHighlights ?? b.highlights;
}
