import App from './App.svelte';
import "./main.css";

const app = new App({
	target: document.body,
	intro: true,
	props: {
		version: '${VERSION}',
		reports,
		reportsCreatedAt
	}
});

export default app;