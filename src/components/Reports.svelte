<script>

    import { send, receive } from '../crossfade.js';
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

    let showMessagesFor = '';

    function headerKey(reportName) {
        return `${reportName.replace(/\s/g, "_")}`;
    }

    function rowKey(report) {
        return `${report.sourceName}_${report.name.replace(/\s/g, "_")}`;
    }

    function showMessages(report) {
        showMessagesFor = `${report.sourceName}.${report.name}`;
    }

    function hideMessages() {
        showMessagesFor = '';
    }

</script>

<div class="absolute" transition:fade>
    {#each sourceNames as sourceName}
        <section class="pb-4">
            <h2 class="pb-4 tracking-tighter">{sourceName}</h2>
            {#each groupedBySource[sourceName] as report}
                <section class="pl-2 pb-8 relative">
                    <div class="flex">
                        <div class="flex items-baseline p-2 min-h-0 rounded-t font-light text-gray-700 bg-gray-300">
                            {report.name}
                            {#if report['messages'] && report['messages'].length>0}
                                <div class="pl-2 mb-2" on:mouseenter={()=>showMessages(report)} on:mouseleave={hideMessages}>
                                    <svg class="h-3 w-3 fill-current text-gray-700 hover:text-gray-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28.681 7.159c-.694-.947-1.662-2.053-2.724-3.116s-2.169-2.03-3.116-2.724C21.229.137 20.448 0 20 0H4.5A2.503 2.503 0 002 2.5v27C2 30.878 3.122 32 4.5 32h23c1.378 0 2.5-1.122 2.5-2.5V10c0-.448-.137-1.23-1.319-2.841zm-4.138-1.702A27.334 27.334 0 0126.811 8H22V3.189a27.334 27.334 0 012.543 2.268zM28 29.5c0 .271-.229.5-.5.5h-23a.507.507 0 01-.5-.5v-27c0-.271.229-.5.5-.5H20v7a1 1 0 001 1h7v19.5z"/><path d="M23 26H9a1 1 0 010-2h14a1 1 0 010 2zM23 22H9a1 1 0 010-2h14a1 1 0 010 2zM23 18H9a1 1 0 010-2h14a1 1 0 010 2z"/>
                                    </svg>
                                </div>
                                {/if}
                            </div>
                        </div>
                        <table class="bg-gray-100 shadow-md">
                            <tr class="bg-gray-100" in:receive="{{key:headerKey(report.name)}}" out:send="{{key:headerKey(report.name)}}">
                                {#each Object.entries(report.metrics) as metric}
                                <th class="px-4 pt-1 w-40 text-left font-normal text-gray-600">{metric[0]}</th>
                                {/each}
                            </tr>
                            <tr class="bg-gray-100 hover:bg-gray-300" in:receive="{{key:rowKey(report)}}" out:send="{{key:rowKey(report)}}">
                                {#each Object.entries(report.metrics) as metric}
                                <td class="px-4 pb-1 w-40 text-gray-500 hover:text-yellow-800">{metric[1]}</td>
                                {/each}
                            </tr>
                        </table>
                        {#if showMessagesFor === `${report.sourceName}.${report.name}`}
                            <div class="absolute z-10 mt-2 bg-gray-300 shadow-2xl">
                                <div class="flex items-baseline font-light">
                                    <div class="p-2 text-gray-700">Messages</div>
                                    <div>({report.messages.length})</div>
                                </div>
                                <ul class="mb-1">
                                    {#each report.messages as message ,i }
                                        <li class="p-2 border bg-gray-200 font-mono text-sm">{message}</li>
                                    {/each}
                                </ul>
                            </div>
                        {/if}
                </section>
            {/each}
        </section>
    {/each}
</div>