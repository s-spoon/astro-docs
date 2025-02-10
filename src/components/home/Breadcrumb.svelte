<script lang="ts">
  import { currentItem, type Item } from "@/bundle-hierarchy";
  import { House } from "lucide-svelte";

  let path: Item[] = [];
  export let appName: string | undefined;

  function constructPath(item: Item, path: Item[] = []){
    path.unshift(item);
    if (item.foreignKey) constructPath(item.foreignKey, path);

    return path;
  }
  
  $: {
    path = constructPath($currentItem);
  }

  const changeView = (item: Item) => (e: MouseEvent) => {
    currentItem.set(item);
  }
</script>

<nav class="w-full p-3 pb-2 flex mx-6">
  {#each path as item (item)}
    <button on:click={changeView(item)} class="flex items-center gap-2">
      {#if item.title === "{icon:Home}"}
        <House class="w-4 text-gray-600"/>
        <span class="text-gray-600">Home</span>
        <span class="text-gray-600">/</span>
        <span>{appName}</span>
      {:else}
        {item.title.replaceAll('<br/>', '')}
      {/if}
    </button>
  {/each} 
</nav>