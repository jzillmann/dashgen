<script>

	import NavBar from './components/NavBar.svelte'
	import TextFiller from './components/TextFiller.svelte'

	export let version;
	export let reports;
	export let reportsCreatedAt;

	const reportNames = Object.keys(reports);

	console.log(reports);

</script>

<div class="min-h-screen bg-green-100">
	<!-- Header -->
	<NavBar {version} />

	<!-- Content -->
	<main class="pt-20 px-8 text-gray-700">
		<div>{reportNames.length} reports available!</div>
		<TextFiller />
	</main>

	<!-- Footer -->

	<footer class="fixed bottom-0 right-0">
		<div class="px-2 opacity-75  bg-gray-100 text-gray-600">Generated at {reportsCreatedAt.toUTCString()}.</div>
	</footer>
</div>