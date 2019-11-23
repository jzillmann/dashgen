<script>
  import { scale } from "svelte/transition";

  import { reportsGroupedBySource } from "../stores.js";

  function switchReportAlignment() {
    reportsGroupedBySource.set(!$reportsGroupedBySource);
  }
</script>

{#if $reportsGroupedBySource}
<div on:click="{switchReportAlignment}" transition:scale>
  <svg
    class="absolute h-5 w-5 cursor-pointer fill-current text-gray-700 hover:text-gray-600"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 12l6 10 3.97-2.896L22 19l.236-.091-.184.135L28 24v2H4v-2l3-9 5-3zm11 1a3 3 0 110-6 3 3 0 010 6zM1 2h30a1 1 0 011 1v26a1 1 0 01-1 1H1a1 1 0 01-1-1V3a1 1 0 011-1zm1 25a1 1 0 001 1h26a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v22z"
    />
  </svg>
</div>
{:else}
<div on:click="{switchReportAlignment}" transition:scale>
  <svg
    class="absolute h-5 w-5 cursor-pointer fill-current text-gray-700 hover:text-gray-600"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 12l-6 10-3.97-2.896L10 19l-.236-.091.184.135L4 24v2h24v-2l-3-9-5-3zM9 13a3 3 0 100-6 3 3 0 000 6zM31 2H1a1 1 0 00-1 1v26a1 1 0 001 1h30a1 1 0 001-1V3a1 1 0 00-1-1zm-1 25a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h26a1 1 0 011 1v22z"
    />
  </svg>
</div>
{/if}
