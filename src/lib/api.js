const BASE_URL = 'https://api.jikan.moe/v4';

export async function getTopAnime(page = 1) {
  const response = await fetch(`${BASE_URL}/top/anime?page=${page}`);
  if (!response.ok) throw new Error('Failed to fetch anime');
  return response.json();
}

export async function getAnimeById(id) {
  const response = await fetch(`${BASE_URL}/anime/${id}`);
  if (!response.ok) throw new Error('Failed to fetch anime details');
  return response.json();
}

export async function searchAnime(query, page = 1) {
  const response = await fetch(`${BASE_URL}/anime?q=${encodeURIComponent(query)}&page=${page}`);
  if (!response.ok) throw new Error('Failed to search anime');
  return response.json();
}