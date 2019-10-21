<script>

	import NavBar from './components/NavBar.svelte'
	import Totals from './components/Totals.svelte'
	import ReportsAlignedBySource from './components/ReportsAlignedBySource.svelte'
	import ReportsAlignedByCategory from './components/ReportsAlignedByCategory.svelte'

	import { fade } from 'svelte/transition';

	import { page, reportsAlignedByCategory } from './stores.js';

	export let version;
	export let reportsCreatedAt;

</script>

<div class="antialiased">
	<!-- Header -->
	<NavBar {version} />

	<!-- Content -->
	<main class="pt-24 px-8 text-gray-700" in:fade>
		{#if $page === 'reports'}
			{#if $reportsAlignedByCategory}
				<ReportsAlignedByCategory/>
			{:else}
				<ReportsAlignedBySource/>
			{/if}
		{:else if $page === 'totals'}
			<Totals/>
		{:else}
			<div class="text-center font-bold text-lg">404 - Page '{$page}' not found</div>
		{/if}
	</main>

	<!-- Footer -->
	<footer class="fixed bottom-0 right-0">
		<div class="px-2 opacity-75  bg-gray-100 text-gray-600">Generated at {reportsCreatedAt.toUTCString()}.</div>
	</footer>
</div>