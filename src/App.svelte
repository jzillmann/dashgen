<script>

	import NavBar from './components/NavBar.svelte'
	import TextFiller from './components/TextFiller.svelte'

	export let version;
	export let reports;
	export let reportsCreatedAt;

	const reportNames = Object.keys(reports);

	console.log(reports);

</script>

<div class="min-h-screen bg-gray-200">
	<!-- Header -->
	<NavBar {version} />

	<!-- Content -->
	<main class="pt-20 px-8 text-gray-700">
		{#each reportNames as reportName}
			<section class="pb-4">
				<h2 class="pb-4">{reportName}</h2>
				{#each reports[reportName] as category}
				<section class="pl-2 pb-0">
						<table class="bg-gray-100">
								<tr>
									<th class="px-4 pt-1 w-56 text-center text-gray-700" rowspan="3">{category.name}</th>
									{#each category.counts['headers'] as metric}
									<th class="px-4 pt-1 w-40 text-left text-gray-600">{metric}</th>
									{/each}
								</tr>
								<tr>
									{#each category.counts['values'] as count}
										<td class="px-4 pb-1 w-40 text-gray-500">{count}</td>
									{/each}
								</tr>
						</table>
				</section>
				{/each}
			</section>
		{/each}

		<TextFiller />
	</main>

	<!-- Footer -->

	<footer class="fixed bottom-0 right-0">
		<div class="px-2 opacity-75  bg-gray-100 text-gray-600">Generated at {reportsCreatedAt.toUTCString()}.</div>
	</footer>
</div>