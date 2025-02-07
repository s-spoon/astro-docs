<script lang="ts">
  import { currentItem, type Item } from '@/bundle-hierarchy';
  import { tw } from '@/tw';

  // Props for the card component
  // export let item: Item, baseURI: string;
  export let baseURI: string;
  export let remappedTOC: TOCEntry[];
  // export let tocItem: {
  //   active: boolean;
  //   href: string;
  //   name: string;
  //   items: TOCEntry[];
  // };
  // const { title, desc, link, icon, compact, enclosedItems } = item;
  console.log(remappedTOC);
  
  const normalStyle = tw`
  bg-white
    grid
    grid-rows-[auto_1fr_auto]
    gap-1
    
    shadow-[4px_4px]
    hover:shadow-[2px_2px]
    hover:shadow-neutral-50
    shadow-neutral-50 cursor-pointer
    transition-shadow
    
    border-2 border-aptean-light rounded-lg
    
    w-[24rem] mt-8 mr-8 p-3 pt-16 min-h-28

    relative
  `
  const compactStyle = tw`
  bg-white
    
    shadow-[4px_4px]
    hover:shadow-[2px_2px]
    hover:shadow-neutral-50
    shadow-neutral-50 cursor-pointer
    transition-shadow
    
    border border-aptean-dark rounded-lg
    
    w-40 m-4 px-4 py-4 min-h-32 text-sm
    flex flex-col justify-center

    relative
  `

  const handleViewChange = (item: Item) => (e: MouseEvent) => {
    if (link) return;
    e.preventDefault();

    currentItem.set(item);
  }

  let showAll = false;

  const toggleViewAll = () => {
    showAll = !showAll;
  };
</script>

<!-- {#if !compact}
  <a href={link} on:click={handleViewChange(item)} class={normalStyle}>
    <img src={icon ?? baseURI + "aptean-yellow.svg"} alt="icon" class="w-12 h-12 rounded-lg bg-aptean-dark p-3 absolute ml-4 mt-4"/>
    {#each remappedTOC as tocItem}
    {#if title === tocItem.appLong}
      <h3 class="font-semibold text-xl w-full h-min pl-16">{@html tocItem.appLong}</h3>
      {#if tocItem.remappedTOC.length > 0}
        <div class="text-blue-600 font-semibold text-lg ml-5" style="padding-top: 1.5rem;">
          {#each (showAll ? tocItem.remappedTOC : tocItem.remappedTOC.slice(0, 6)) as entry}
            <p>{entry.name}</p>
          {/each}
          {#if tocItem.remappedTOC.length > 6 && !showAll}
            <button class="text-blue-600" on:click={toggleViewAll}>View All</button>
          {/if}
          {#if showAll}
            <button class="text-blue-600" on:click={toggleViewAll}>View Less</button>
          {/if}
        </div>
      {/if}
    {/if}
  {/each}
    {#if enclosedItems}
      <div class="flex gap-2 self-end">
        {#each enclosedItems as enclosedItem}
          <a href={enclosedItem.link} on:click={handleViewChange(enclosedItem)}  class="justify-center items-center flex grow bg-aptean-yellow-light border border-aptean-yellow-dark p-2 rounded-lg">{@html enclosedItem.title}</a>
        {/each}
      </div>
    {/if}
  </a>
{:else}
  <a href={link} on:click={handleViewChange(item)} class={compactStyle}>
    <img src={icon ?? baseURI + "aptean-yellow.svg"} alt="icon" class="mx-auto max-w-10 max-h-10"/>
    <h3 class="text-center mt-4">{title}</h3>
  </a>
{/if} -->
{#each remappedTOC as tocItem}
<a href={baseURI + tocItem.href} class={normalStyle}>
  <img src={baseURI + "aptean-yellow.svg"} alt="icon" class="w-12 h-12 rounded-lg bg-aptean-dark p-3 absolute ml-4 mt-4"/>
  <div class="text-blue-600 font-semibold text-lg ml-2" style="padding-top: 1.5rem;">
    <p>{tocItem.name}</p>
  </div>
</a>
{/each}
