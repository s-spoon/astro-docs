<script lang="ts">
  import Card from "./Card.svelte";
  import { currentItem } from "@/bundle-hierarchy";

  export let baseURI: string;
  export let remappedTOCList: {
  appLong: string;
  remappedTOC: TOCEntry[];
} 

  $: icons = $currentItem.items?.flatMap(function getIcon(item): string[] {
    
    const icons = item.items?.flatMap(getIcon) ?? [];
    return [item.icon || [], ...icons].flat();
  }) ?? [];
  $: uniqueIcons = new Set(icons);
</script>

<svelte:head>
  {#each uniqueIcons as icon, idx (idx)}
    <link rel="prefetch" href={icon} />
  {/each}
</svelte:head>

<article class="flex flex-wrap content-start pb-4 pt-2 overflow-auto justify-start ml-8">
  {#each $currentItem.items?.filter(it => !it.groupID) || [] as item (item)}
    <Card {item} {baseURI} {remappedTOCList} />
  {/each}
</article>
{#each $currentItem.groups || [] as [groupName, groupID]}
  <article class="mx-4 flex flex-wrap content-start pb-4 mb-4 overflow-auto justify-center bg-aptean-light bg-opacity-20 rounded-md border border-aptean-dark">
    <h2 class="text-lg font-normal bg-aptean-dark text-white w-full py-2 px-2.5">{groupName}</h2>
    {#each $currentItem.items?.filter(it => it.groupID === groupID) || [] as item (item)}
      <Card {item} {baseURI} {remappedTOCList} />
    {/each}
  </article>
{/each}