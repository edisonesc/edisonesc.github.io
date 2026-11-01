/**
 * Month-precision date helpers for "Mon YYYY" / "Present" strings from the content collections.
 * "Present" resolves to the build date — the deploy workflow rebuilds monthly to keep it current.
 */
const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const SHORT = new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" });

export const isPresent = (value: string) => value === "Present";

/** Months since year 0, so ranges can be compared and subtracted as integers. */
export function toMonthIndex(value: string, now = new Date()): number {
	if (isPresent(value)) return now.getUTCFullYear() * 12 + now.getUTCMonth();
	const [month, year] = value.split(" ");
	const m = MONTHS.indexOf(month.slice(0, 3).toLowerCase());
	if (m < 0 || !year) throw new Error(`Unparseable date "${value}"`);
	return Number(year) * 12 + m;
}

/** Fractional year for positioning on a timeline axis. */
export const toYear = (value: string, now?: Date) => toMonthIndex(value, now) / 12;

export function formatMonth(value: string): string {
	if (isPresent(value)) return "Present";
	const i = toMonthIndex(value);
	return SHORT.format(Date.UTC(Math.floor(i / 12), i % 12, 1));
}

/** "Jun 2023 – Present", or a single month when start and end match. */
export function formatRange(start: string, end: string): string {
	const a = formatMonth(start);
	const b = formatMonth(end);
	return a === b ? a : `${a} – ${b}`;
}

/** Inclusive length, LinkedIn-style: Jul 2021 – Jun 2023 is "2 yrs". */
export function formatDuration(start: string, end: string, now?: Date): string {
	const months = toMonthIndex(end, now) - toMonthIndex(start, now) + 1;
	const y = Math.floor(months / 12);
	const m = months % 12;
	const parts = [];
	if (y) parts.push(`${y} ${y === 1 ? "yr" : "yrs"}`);
	if (m) parts.push(`${m} ${m === 1 ? "mo" : "mos"}`);
	return parts.join(" ") || "1 mo";
}

export const startYear = (value: string) => Math.floor(toMonthIndex(value) / 12);
