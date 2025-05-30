<script>
  import AnimeCard from '@/components/AnimeCard.svelte';
  import Pagination from '@/components/Pagination.svelte';
  import { goto } from '$app/navigation';
  
  let { data } = $props();
  
  function handlePageChange(page) {
    goto(`/search?q=${encodeURIComponent(data.query)}&page=${page}`);
  }
</script>

<div class="max-w-7xl mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-8">
    {data.query ? `Search Results for "${data.query}"` : 'Search Anime'}
  </h1>
  
  {#if data.anime.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {#each data.anime as anime (anime.mal_id)}
        <AnimeCard {anime} />
      {/each}
    </div>
    
    {#if data.pagination && data.pagination.last_visible_page}
      <Pagination
        currentPage={data.currentPage}
        totalPages={data.pagination.last_visible_page}
        onPageChange={handlePageChange}
      />
    {/if}
  {:else if data.query}
    <p class="text-gray-400 text-center py-12">No anime found for "{data.query}"</p>
  {:else}
    <p class="text-gray-400 text-center py-12">Enter a search term to find anime</p>
  {/if}
</div>