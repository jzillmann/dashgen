<script>

    import { send, receive } from '../crossfade.js';
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

    function headerKey(reportName) {
        return `${reportName.replace(/\s/g, "_")}`;
    }

    function rowKey(report) {
        return `${report.sourceName}_${report.name.replace(/\s/g, "_")}`;
    }

</script>

<div class="absolute" transition:fade>
    {#each reportNames as reportName}
        <section class="pb-4">
            <h2 class="pb-4 tracking-tighter">{reportName}</h2>
            <section class="pl-2 pb-0">
                    <table class="bg-gray-100 shadow-md">
                        <tr class="bg-gray-100" in:receive="{{key:headerKey(reportName)}}" out:send="{{key:headerKey(reportName)}}">
                            <th class="px-4 pt-1 w-40 text-left font-medium text-gray-600">Source</th>
                            {#each Object.keys(groupedByReportName[reportName][0].metrics) as metricName}
                                <th class="px-4 pt-1 w-40 text-left font-normal text-gray-600">{metricName}</th>
                            {/each}
                        </tr>
                        {#each groupedByReportName[reportName] as report}
                            <tr class="bg-gray-100 hover:bg-gray-300" in:receive="{{key:rowKey(report)}}" out:send="{{key:rowKey(report)}}">
                                <td class="px-4 pb-1 w-40 text-gray-500">{report.sourceName}</td>
                                {#each Object.entries(report.metrics) as metric}
                                    <td class="px-4 pb-1 w-40 text-gray-500 hover:text-yellow-800">{metric[1]}</td>
                                {/each}
                            </tr>
                        {/each}
                    </table>
            </section>
        </section>
    {/each}
</div>