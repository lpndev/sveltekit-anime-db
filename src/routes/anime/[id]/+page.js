import { getAnimeById } from '$lib/api.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const data = await getAnimeById(params.id);
    return {
      anime: data.data
    };
  } catch (err) {
    throw error(404, 'Anime not found');
  }
}