import { searchAnime } from '$lib/api.js';

export async function load({ url }) {
  const query = url.searchParams.get('q') || '';
  const page = parseInt(url.searchParams.get('page') || '1');
  
  if (!query) {
    return {
      anime: [],
      query: '',
      pagination: {},
      currentPage: 1
    };
  }

  try {
    const data = await searchAnime(query, page);
    return {
      anime: data.data || [],
      query,
      pagination: data.pagination || {},
      currentPage: page
    };
  } catch (error) {
    console.error('Search failed:', error);
    return {
      anime: [],
      query,
      pagination: {},
      currentPage: 1
    };
  }
}