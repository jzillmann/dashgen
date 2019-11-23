<script>
  import { fade } from "svelte/transition";

  import { reports } from "../stores.js";

  const sourceCount = new Set($reports.map(report => report.sourceName)).size;
</script>

<div class="absolute" transition:fade>
  <div class="flex">
    <div
      class="group m-4 cursor-default rounded bg-gray-300 shadow-lg hover:shadow-xl bg-gray-100 hover:scale-1"
      style="transition: all .9s;"
    >
      <div
        class="m-1 p-2 text-center rounded-full font-semibold text-2xl text-gray-700 bg-gray-100 group-hover:bg-gray-300"
        style="transition: all .9s;"
      >
        {sourceCount}
      </div>
      <div
        class="p-1 text-center rounded-b font-hairline text-gray-800 bg-gray-300 group-hover:up-7 group-hover:text-gray-900 group-hover:bg-gray-400"
        style="transition: all .9s;"
      >
        Sources
      </div>
    </div>
  </div>
</div>
