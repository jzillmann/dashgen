<script>

    export let version;

    import { reportsAlignedByCategory } from '../stores.js';

    function switchReportAlignment() {
        reportsAlignedByCategory.set(!$reportsAlignedByCategory);
    }

</script>

<header class="fixed w-full flex items-center bg-gray-100">
    <div class="pl-8 text-5xl font-bold tracking-tighter text-gray-700">Dashgen</div>
    <div class="pl-2 mt-8 text-sm text-gray-600">v{version}</div>
    <nav class="flex pl-4 w-full text-lg font-medium text-gray-700">
        <ul class="flex">
            <li class="px-4 mx-1 cursor-pointer hover:text-gray-600">Totals</li>
            <li class="px-4 mx-1 cursor-pointer hover:text-gray-600">Reports</li>
        </ul>
    </nav>
    <ul class="pl-8 pr-20 flex items-center">
        {#if $reportsAlignedByCategory}
            <li class="pr-4" on:click={switchReportAlignment}>
                <svg class="h-5 w-5 fill-current text-gray-700" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M12 12l6 10 3.97-2.896L22 19l.236-.091-.184.135L28 24v2H4v-2l3-9 5-3zm11 1a3 3 0 110-6 3 3 0 010 6zM1 2h30a1 1 0 011 1v26a1 1 0 01-1 1H1a1 1 0 01-1-1V3a1 1 0 011-1zm1 25a1 1 0 001 1h26a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v22z" />
                </svg>
            </li>
        {:else}
            <li class="pr-4" on:click={switchReportAlignment}>
                <svg class="h-5 w-5 fill-current text-gray-700" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 12l-6 10-3.97-2.896L10 19l-.236-.091.184.135L4 24v2h24v-2l-3-9-5-3zM9 13a3 3 0 100-6 3 3 0 000 6zM31 2H1a1 1 0 00-1 1v26a1 1 0 001 1h30a1 1 0 001-1V3a1 1 0 00-1-1zm-1 25a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h26a1 1 0 011 1v22z" />
                </svg>
            </li>
        {/if}
        <li>
            <svg class="h-6 w-6 fill-current text-gray-700" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16 .395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182.8.148 1.094-.347 1.094-.77 0-.381-.015-1.642-.022-2.979-4.452.968-5.391-1.888-5.391-1.888-.728-1.849-1.776-2.341-1.776-2.341-1.452-.993.11-.973.11-.973 1.606.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33.143-1.034.558-1.74 1.016-2.14-3.554-.404-7.29-1.777-7.29-7.907 0-1.747.625-3.174 1.649-4.295-.166-.403-.714-2.03.155-4.234 0 0 1.344-.43 4.401 1.64a15.353 15.353 0 014.005-.539c1.359.006 2.729.184 4.008.539 3.054-2.07 4.395-1.64 4.395-1.64.871 2.204.323 3.831.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895.574.497 1.085 1.47 1.085 2.963 0 2.141-.019 3.864-.019 4.391 0 .426.288.925 1.099.768C27.421 29.457 32 23.462 32 16.395c0-8.837-7.164-16-16-16z" />
            </svg>
        </li>
    </ul>
</header>