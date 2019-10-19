<script>

	import NavBar from './components/NavBar.svelte'
	import TextFiller from './components/TextFiller.svelte'
	import Reports from './components/Reports.svelte'
	import ReportsAlignedByCategory from './components/ReportsAlignedByCategory.svelte'

	import { fade } from 'svelte/transition';

	import { reportsAlignedByCategory } from './stores.js';

	export let version;
	export let reportsCreatedAt;

</script>

<div>
	<!-- Header -->
	<NavBar {version} />

	<!-- Content -->
	<main class="pt-24 px-8 text-gray-700" in:fade>
		{#if $reportsAlignedByCategory}
			<ReportsAlignedByCategory/>
		{:else}
			<Reports/>
		{/if}
		<!-- <TextFiller /> -->

	</main>

	<!-- Footer -->
	<footer class="fixed bottom-0 right-0">
		<div class="px-2 opacity-75  bg-gray-100 text-gray-600">Generated at {reportsCreatedAt.toUTCString()}.</div>
	</footer>
</div>