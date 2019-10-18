import App from './App.svelte';
import "./main.css";

const app = new App({
	target: document.body,
	props: {
		version: '${VERSION}',
		reports,
		reportsCreatedAt
	}
});

export default app;