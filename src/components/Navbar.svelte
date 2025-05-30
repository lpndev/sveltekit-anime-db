<script>
  import { searchAnime } from '@/lib/api.js';
  import { createSearch } from '@/runes/search.svelte.js';
  import { goto } from '$app/navigation';

  const search = createSearch();

  async function handleSearch() {
    if (!search.query.trim()) return;
    
    search.loading = true;
    try {
      const data = await searchAnime(search.query);
      goto(`/search?q=${encodeURIComponent(search.query)}`);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      search.loading = false;
    }
  }
</script>

<nav class="bg-gray-800 shadow-lg">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <a href="/" class="text-xl font-bold text-blue-400">AnimeList</a>
      
      <form onsubmit={handleSearch} class="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search anime..."
          bind:value={search.query}
          class="px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          disabled={search.loading}
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg disabled:opacity-50"
        >
          {search.loading ? 'Searching...' : 'Search'}
        </button>
      </form>
    </div>
  </div>
</nav>