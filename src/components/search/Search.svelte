<script lang="ts">
  import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
  import { onMount } from 'svelte';
  import instantsearch from 'instantsearch.js';
  import { searchBox, hits, pagination, index, configure, menuSelect } from 'instantsearch.js/es/widgets';
  import bundleInfo, { type Item, findCompactItemsWithLink } from '@/bundle-hierarchy';

  export let searchAPI_KEY: string, searchHOST: string, appMapping: { short: string, long: string }[];

  const { searchClient, setMeiliSearchParams } = instantMeiliSearch(
    searchHOST || 'http://localhost:7700/', // Host
    searchAPI_KEY, // API key
    {
      meiliSearchParams: {
        attributesToHighlight: ['content'],
        highlightPreTag: '<mark>',
        attributesToCrop: ['content'],
        cropLength: 40,
        highlightPostTag: '</mark>',
        attributesToSearchOn: ['long', 'content', 'title']
      },
      
    }
  );

  let search;

  onMount(() => {
    search = instantsearch({
      indexName: 'docs',
      searchClient,
    });

    console.log('Mounted');

    const commonWidgets = [
      searchBox({
        container: '#searchbox',
        placeholder: 'Search the documentation',
      }),
    ];

    const docsWidgets = index({ indexName: 'docs'})
    .addWidgets([
      hits({
        container: '#doc-hits',
        escapeHTML: false,
        templates: {
          item: (hit, { html, components }) => {
            const highlightedContent = components.Snippet({ hit, attribute: 'content' })
            return html`
              <div class="document">
                <a href="/${hit.slug}/">
                  <h3>${hit.app}</h3>
                  <h2>${hit.title}</h2>
                  <p class="text-sm">${highlightedContent}</p>
                </a>
              </div>
            `
          },
          empty(_, { html }) {
            return html`No documents found`
          },
        },
      }),
      menuSelect({
        container: '#app-filter',
        attribute: 'app',
        limit: Infinity,
        templates: {
          defaultOption: `See all apps`,
          item(data, { html }) {
            const appName = appMapping.find(a => a.short === data.label)!.long;
            return html`${appName} (${data.count})`
          },
        },
      }),
      pagination({
        container: '#pagination',
      }),
      configure({
        // @ts-ignore
        hitsPerPage: 5, // Limit to 5 hits per page
      }),
    ]);
    const appsWidgets = index({ indexName: 'apps' }).addWidgets([]);

    search.addWidgets([ ...commonWidgets, appsWidgets, docsWidgets ]);
    search.start();

    const suppliedApp = new URLSearchParams(location.search).get('app');
    if (!suppliedApp || !appMapping.some(a => a.short === suppliedApp)) return;

    docsWidgets.getHelper()
      ?.clearRefinements('app')
      .addHierarchicalFacetRefinement('app', suppliedApp);
  });
</script>

<style lang="scss">
  :global(#searchbox form) {
    @apply flex justify-end;

    & > :global(input[type=search]) {
      @apply grow;
    }
    & > :global(button) {
      @apply hidden;
    }
  }

  :global(#pagination ul) {
    @apply flex gap-4 text-lg justify-center items-center;

    :global(:is(.ais-Pagination-item--firstPage, .ais-Pagination-item--previousPage, 
    .ais-Pagination-item--nextPage, .ais-Pagination-item--lastPage)) {
      @apply text-2xl cursor-pointer -mt-1;
    }

    :global(.ais-Pagination-item--selected) {
      @apply bg-aptean-dark py-1 px-2 rounded-md text-white;
    }
  }

  :global(#doc-hits ol) {
    @apply flex gap-2 w-full flex-wrap justify-center;

    :global(li) {
      @apply w-full;
    }
    :global(.document) {
      &:hover {
        @apply shadow-md;
      }
      @apply p-3 rounded-lg border transition-all;
    }

    :global(h2) {
      @apply text-xl;
    }
    :global(h3) {
      @apply text-lg font-semibold;
    }
  }

  :global(#app-hits ol) {
    @apply flex gap-2 flex-wrap justify-center w-full;

    :global(li) {
      @apply w-full;
    }
    :global(.app) {
      &:hover {
        @apply shadow-md;
      }
      @apply border border-aptean-dark rounded-lg transition-all;
    }
  }

  :global(#app-filter select) {
    @apply w-full
  }
</style>

<div class="col-span-full flex justify-center gap-4">
  <div id="searchbox" class="grow"></div>
  <div id="app-filter" class="w-96"></div>
</div>
<section id="doc-hits" class="col-span-2"></section>
<div id="pagination" class="col-start-1"></div>