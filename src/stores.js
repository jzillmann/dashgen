import { writable } from 'svelte/store';

export const reportsAlignedByCategory = writable(false);

export const reports = writable([]);