import { writable } from "svelte/store";

export const reports = writable([]);

export const reportsGroupedBySource = writable(true);

export const page = writable("totals");
