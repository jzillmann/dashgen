import { writable } from 'svelte/store';

export const reports = writable([]);

export const reportsAlignedByCategory = writable(false);

export const page = writable('reports');