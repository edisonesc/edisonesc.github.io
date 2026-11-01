import { defineCollection, reference } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

/** "Jun 2023", "June 2023" or "Present". Parsed later by src/lib/dates.ts. */
const monthYear = z
	.string()
	.regex(/^(Present|[A-Z][a-z]{2,8} \d{4})$/, 'Use "Mon YYYY" (e.g. "Jun 2023") or "Present"');

const range = {
	start: monthYear,
	end: monthYear.default("Present"),
};

const technologies = defineCollection({
	loader: file("src/data/technologies.yaml"),
	schema: z.object({
		name: z.string(),
		url: z.url().optional(),
		kind: z.enum(["framework", "language", "tool", "practice"]),
		group: z.enum(["frontend", "backend", "devops", "exploratory", "approach"]),
		/** Finer label within a group, e.g. "Database" or "Styling". */
		subgroup: z.string().optional(),
		/** Day-job stack. */
		core: z.boolean().default(false),
		/** Only used to tag projects; not listed under Skills. */
		hidden: z.boolean().default(false),
		cvExclude: z.boolean().default(false),
		description: z.string().optional(),
	}),
});

const projects = defineCollection({
	loader: file("src/data/projects.yaml"),
	schema: z.object({
		name: z.string(),
		...range,
		description: z.string(),
		url: z.url().optional(),
		type: z.enum(["web", "mobile", "system", "others"]),
		technologies: z.array(reference("technologies")).min(1),
		cvExclude: z.boolean().default(false),
	}),
});

/** Bullets grouped under a titled area of work, e.g. "Platform Architecture & Modernization". */
const group = z.object({
	title: z.string(),
	highlights: z.array(z.string()).min(1),
	/** Replaces `highlights` on the CV only. */
	cvHighlights: z.array(z.string()).optional(),
});

/** Bullets as a flat list or as titled groups; `cvHighlights` replaces the flat list on the CV only. */
const bullets = {
	highlights: z.array(z.string()).default([]),
	groups: z.array(group).default([]),
	cvHighlights: z.array(z.string()).optional(),
};
const hasBullets = (b: { highlights: string[]; groups: unknown[] }) => b.highlights.length > 0 || b.groups.length > 0;

const experience = defineCollection({
	loader: file("src/data/experience.yaml"),
	schema: z
		.object({
			organization: z.string(),
			/** Short label for tight spots like the timeline bars. */
			short: z.string().optional(),
			position: z.string().optional(),
			location: z.string().optional(),
			...range,
			type: z.enum(["direct", "outsourcing", "intern", "education", "training"]),
			...bullets,
			/** Client or product engagements, each with its own bullets. */
			engagements: z
				.array(
					z
						.object({ name: z.string(), ...range, ...bullets })
						.refine(hasBullets, { message: "An engagement needs highlights or groups" }),
				)
				.default([]),
			cvExclude: z.boolean().default(false),
		})
		.refine((e) => hasBullets(e) || e.engagements.length > 0, {
			message: "An experience needs highlights, groups or engagements",
		}),
});

export const collections = { technologies, projects, experience };
