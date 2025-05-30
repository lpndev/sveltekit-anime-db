<script>
  let { anime } = $props();
</script>

<div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
  <a href="/anime/{anime.mal_id}" class="block">
    <img 
      src={anime.images.jpg.image_url} 
      alt={anime.title}
      class="w-full h-64 object-cover"
    />
    <div class="p-4">
      <h3 class="font-bold text-lg mb-2 line-clamp-2 text-zinc-100">{anime.title}</h3>
      <div class="flex justify-between items-center text-sm text-gray-400">
        <span>Score: {anime.score || 'N/A'}</span>
        <span>{anime.year || 'Unknown'}</span>
      </div>
      <p class="text-sm text-gray-300 mt-2 line-clamp-3">
        {anime.synopsis || 'No synopsis available'}
      </p>
    </div>
  </a>
</div>