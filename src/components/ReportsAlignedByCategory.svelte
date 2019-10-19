<script>

    import { reports } from '../stores.js';

    const reportNames = $reports
        .map(report => report.name)
        .filter((report, index, source) => source.indexOf(report) == index);

    const groupedBySource = $reports.reduce((groups, item) => {
        const group = (groups[item.name] || []);
        group.push(item);
        groups[item.name] = group;
        return groups;
    }, {});

</script>

{#each reportNames as reportName}
    <section class="pb-4">
        <h2 class="pb-4">{reportName}</h2>
        {#each groupedBySource[reportName] as report}
        <section class="pl-2 pb-0">
                <table class="bg-gray-100">
                        <tr>
                            <th class="px-4 pt-1 w-56 font-light text-gray-700" rowspan="3">{report.sourceName}</th>
                            {#each Object.entries(report.metrics) as metric}
                                <th class="px-4 pt-1 w-40 text-left font-medium text-gray-600">{metric[0]}</th>
                            {/each}
                        </tr>
                        <tr>
                            {#each Object.entries(report.metrics) as metric}
                                <td class="px-4 pb-1 w-40 text-gray-500">{metric[1]}</td>
                            {/each}
                        </tr>
                </table>
        </section>
        {/each}
    </section>
{/each}