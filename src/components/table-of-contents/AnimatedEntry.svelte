<script lang="ts">
  import { slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import { ChevronDown } from 'lucide-svelte';
  import { flattenTOC, type TOCEntry } from '@/TOC';

  const baseURL = '/';

  export let name: string;
  export let href: string | undefined;
  export let items: TOCEntry[] = [];
  export let active = false;
  export let notFound = false;
  export let appName: string;

  let searchTerm = '', isOpen = false;
  let hasActivePage = items.reduce(flattenTOC, []).some(x => x.active);

  function toggle() {
    isOpen = !isOpen;
  }

  function changeTerm(e: CustomEvent<string>){
    searchTerm = e.detail;
  }

  $: hasTerm = name.toLowerCase().includes(searchTerm.toLowerCase()) || items.some(function includesTerm(e){
    return e.name.toLowerCase().includes(searchTerm.toLowerCase()) || e.items && e.items.some(includesTerm);
  })
  $: isOpen = (hasTerm && searchTerm.length > 0) || hasActivePage || active;

  let entryEl: HTMLDivElement;
  $: if (active && entryEl) {
    entryEl.scrollIntoView({ block: 'center', inline: 'nearest' });
  }
</script>

{ [/* @ts-ignore */] }
<svelte:window on:toc-search={changeTerm} />

<!-- {#if !(appName === "QRG" && notFound) && !(items && items.length >= 1 && items.every(e => e.notFound)) } -->
  
<div bind:this={entryEl} class="toc-entry text-base leading-6 {!hasTerm ? 'hidden' : ''} my-1">
  <button
    class="w-full cursor-pointer flex items-center text-left py-1 {!items.length ? 'pl-3' : 'pl-1'} px-4 text-black {active ? 'text-white bg-aptean-dark' : 'hover:bg-aptean-light'} rounded transition-colors duration-200"
    on:click={toggle}
  >
    {#if items.length}
      <ChevronDown class="min-w-5 max-w-5 min-h-5 max-h-5 mx-1 transition-transform duration-200 {isOpen ? 'rotate-180' : ''}" />
    {/if}
    {#if href}
      <a href={baseURL + href} class:pointer-events-none={active} class:ml-5={items.length < 1}  class="{!active ? 'hover:text-blue-700' : ''}">
        {name}
      </a>
    {:else}
      <span class:ml-5={items.length < 1}>{name}</span>
    {/if}
  </button>

  {#if items.length && isOpen}
    <div
      transition:slide={{duration: 900, easing: cubicInOut }}
    >
      <ul class="pl-5 mt-0">
        {#each items as child}
          <li>
            <svelte:self {...child} {appName} />
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<!-- {/if} -->