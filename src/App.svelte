<script>
	export let reports;
	export let reportsCreatedAt;

	const reportNames = Object.keys(reports);

	console.log(reports);

</script>

<h1>{reportNames.length} reports available!</h1>

<div>Generated at {reportsCreatedAt.toUTCString()}.</div>