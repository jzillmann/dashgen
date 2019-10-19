<script>

    import { fade } from 'svelte/transition';

    import { reports } from '../stores.js';

    const sourceNames = $reports
        .map(report => report.sourceName)
        .filter((report, index, source) => source.indexOf(report) == index);

    const groupedBySource = $reports.reduce((groups, item) => {
        const group = (groups[item.sourceName] || []);
        group.push(item);
        groups[item.sourceName] = group;
        return groups;
    }, {});

</script>

<div class="absolute" transition:fade>
    {#each sourceNames as sourceName}
        <section class="pb-4">
            <h2 class="pb-4">{sourceName}</h2>
            {#each groupedBySource[sourceName] as report}
                <section class="pl-2 pb-8">
                    <div class="flex">
                        <div class="p-2 rounded min-h-0 bg-gray-100 font-light text-gray-700 bg-gray-100">{report.name}</div>
                    </div>
                    <table class="bg-gray-100">
                            <tr>
                                {#each Object.entries(report.metrics) as metric}
                                    <th class="px-4 pt-1 w-40 text-left font-normal text-gray-600">{metric[0]}</th>
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
</div>