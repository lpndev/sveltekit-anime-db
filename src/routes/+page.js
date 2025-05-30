import { getTopAnime } from '$lib/api.js';

export async function load({ url }) {
  const page = parseInt(url.searchParams.get('page') || '1');
  
  try {
    const data = await getTopAnime(page);
    return {
      anime: data.data || [],
      pagination: data.pagination || {},
      currentPage: page
    };
  } catch (error) {
    console.error('Failed to load top anime:', error);
    return {
      anime: [],
      pagination: {},
      currentPage: 1
    };
  }
}