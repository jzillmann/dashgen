<script>

	import TextFiller from './components/TextFiller.svelte'

	export let version;
	export let reports;
	export let reportsCreatedAt;

	const reportNames = Object.keys(reports);

	console.log(reports);

</script>

<div class="bg-green-100 min-h-screen">
	<!-- Header -->
	<header class="fixed w-full flex items-center bg-green-200">
		<div class="pl-8 text-5xl font-bold tracking-tighter text-gray-700">Dashgen</div>
		<div class="pl-2 mt-8 text-sm text-gray-600">v{version}</div>
		<nav class="flex pl-4 w-full text-lg font-medium text-gray-700">
			<div class="px-4 mx-1 cursor-pointer hover:text-gray-600">Totals</div>
			<div class="px-4 mx-1 cursor-pointer hover:text-gray-600">Reports</div>
		</nav>
		<div class="pl-8 pr-20">
			<svg class="h-6 w-6 fill-current text-gray-700" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M16 .395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182.8.148 1.094-.347 1.094-.77 0-.381-.015-1.642-.022-2.979-4.452.968-5.391-1.888-5.391-1.888-.728-1.849-1.776-2.341-1.776-2.341-1.452-.993.11-.973.11-.973 1.606.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33.143-1.034.558-1.74 1.016-2.14-3.554-.404-7.29-1.777-7.29-7.907 0-1.747.625-3.174 1.649-4.295-.166-.403-.714-2.03.155-4.234 0 0 1.344-.43 4.401 1.64a15.353 15.353 0 014.005-.539c1.359.006 2.729.184 4.008.539 3.054-2.07 4.395-1.64 4.395-1.64.871 2.204.323 3.831.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895.574.497 1.085 1.47 1.085 2.963 0 2.141-.019 3.864-.019 4.391 0 .426.288.925 1.099.768C27.421 29.457 32 23.462 32 16.395c0-8.837-7.164-16-16-16z" />
			</svg>
		</div>
	</header>

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