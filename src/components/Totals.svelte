<script>
  import { fade } from "svelte/transition";

  import { reports } from "../stores.js";

  const sourceCount = new Set($reports.map(report => report.sourceName)).size;
</script>

<div class="absolute" transition:fade>
  <div class="shadow-lg">
    <div
      class="p-2 text-center font-extrabold text-2xl text-gray-700 bg-gray-300"
    >
      {sourceCount}
    </div>
    <div class="p-1 text-center font-hairline text-gray-800 bg-gray-400">
      Sources
    </div>
  </div>
</div>
