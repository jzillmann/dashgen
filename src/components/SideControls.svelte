<script>
  import { scale } from "svelte/transition";

  import ViewIcon from "../icons/ViewIcon.svelte";
  import { page } from "../stores.js";

  let sideControls = [];
  $: {
    if ($page === "reports") {
      sideControls = [ViewIcon];
    } else {
      sideControls = [];
    }
  }
</script>

{#if sideControls.length >0}
<div
  class="fixed z-40 mt-24 pl-1 pr-2 pt-2 flex flex-col bg-gray-400 shadow-md"
  transition:scale
>
  {#each sideControls as sideControl, index}
  <div class="w-5 h-5 mb-2">
    <svelte:component this="{sideControl}" />
  </div>
  {/each}
</div>
{/if}
