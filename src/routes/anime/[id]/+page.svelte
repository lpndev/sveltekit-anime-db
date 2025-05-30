<script>
  let { data } = $props();
  const { anime } = data;
</script>

<svelte:head>
  <title>{anime.title} - AnimeList</title>
</svelte:head>

<div class="max-w-6xl mx-auto px-4 py-8">
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div class="lg:col-span-1">
      <img 
        src={anime.images.jpg.large_image_url} 
        alt={anime.title}
        class="w-full rounded-lg shadow-lg"
      />
      
      <div class="mt-6 bg-gray-800 rounded-lg p-4">
        <h3 class="font-bold mb-3 text-zinc-100">Information</h3>
        <div class="space-y-2 text-sm text-zinc-100">
          <div><span class="text-gray-400">Score:</span> {anime.score || 'N/A'}</div>
          <div><span class="text-gray-400">Episodes:</span> {anime.episodes || 'Unknown'}</div>
          <div><span class="text-gray-400">Status:</span> {anime.status}</div>
          <div><span class="text-gray-400">Aired:</span> {anime.aired?.string || 'Unknown'}</div>
          <div><span class="text-gray-400">Duration:</span> {anime.duration || 'Unknown'}</div>
        </div>
      </div>
    </div>
    
    <div class="lg:col-span-2">
      <h1 class="text-4xl font-bold mb-4 text-zinc-100">{anime.title}</h1>
      
      {#if anime.title_english && anime.title_english !== anime.title}
        <h2 class="text-xl text-gray-300 mb-4">{anime.title_english}</h2>
      {/if}
      
      {#if anime.genres && anime.genres.length > 0}
        <div class="flex flex-wrap gap-2 mb-6">
          {#each anime.genres as genre}
            <span class="px-3 py-1 bg-blue-600 rounded-full text-sm">{genre.name}</span>
          {/each}
        </div>
      {/if}
      
      <div class="prose prose-invert max-w-none">
        <h3 class="text-xl font-bold mb-3 text-zinc-100">Synopsis</h3>
        <p class="text-gray-300 leading-relaxed">
          {anime.synopsis || 'No synopsis available.'}
        </p>
      </div>
      
      {#if anime.trailer?.youtube_id}
        <div class="mt-8">
          <h3 class="text-xl font-bold mb-4 text-zinc-100">Trailer</h3>
          <div class="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/{anime.trailer.youtube_id}"
              title="Anime Trailer"
              class="w-full h-full rounded-lg"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>