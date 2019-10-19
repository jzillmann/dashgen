<script>

    import { fade } from 'svelte/transition';

    import { reports } from '../stores.js';

    const reportNames = $reports
        .map(report => report.name)
        .filter((report, index, source) => source.indexOf(report) == index);

    const groupedByReportName = $reports.reduce((groups, item) => {
        const group = (groups[item.name] || []);
        group.push(item);
        groups[item.name] = group;
        return groups;
    }, {});

</script>

<div class="absolute" transition:fade>
    {#each reportNames as reportName, i}
        <section class="pb-4">
            <h2 class="pb-4">{reportName}</h2>
            <section class="pl-2 pb-0">
                    <table class="bg-gray-100">
                        <tr>
                            <th class="px-4 pt-1 w-40 text-left font-medium text-gray-600">Source</th>
                            {#each Object.keys(groupedByReportName[reportName][0].metrics) as metricName}
                                <th class="px-4 pt-1 w-40 text-left font-medium text-gray-600">{metricName}</th>
                            {/each}
                        </tr>
                        {#each groupedByReportName[reportName] as report}
                            <tr>
                                <td class="px-4 pb-1 w-40 text-gray-500">{report.sourceName}</td>
                                {#each Object.entries(report.metrics) as metric}
                                    <td class="px-4 pb-1 w-40 text-gray-500">{metric[1]}</td>
                                {/each}
                            </tr>
                        {/each}
                    </table>
            </section>
        </section>
    {/each}
</div>