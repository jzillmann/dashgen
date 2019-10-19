import App from './App.svelte';
import "./main.css";

import { reports } from './stores.js';

reports.set(data);

const app = new App({
	target: document.body,
	intro: true,
	props: {
		version: '${VERSION}',
		reportsCreatedAt: dataCreatedAt
	}
});

export default app;