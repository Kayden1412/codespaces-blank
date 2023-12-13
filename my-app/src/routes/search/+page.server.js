// @ts-nocheck
import anime from '$lib/utils/anime';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({url}) {
  const page = url.searchParams.get('page') ?? 1;
  const q = url.searchParams.get('q') ?? '';
  const genres = url.searchParams.get('genres') ?? ''

  const req = await anime(`anime?q=${q}&page=${page}&limit=24&sfw&genres=${genres}`).json()

  return req

}

/** @type {import('./$types').Actions} */
export const actions = {
    search: async ({request, url}) => {
      const data = await request.formData();
      const query = data.get('search')

      throw redirect(302, `?q=${query}`)
    }, 
    next: async ({request, url}) => {
      const data = await request.formData();
      const page = data.get("page");
      const query = data.get('query')
      console.log(query, 1412)
      throw redirect(302, `?${query.length > 0 ? 'q=' + query + '&': ''}page=${Number(page) + 1}`)
    }, 
    previous: async ({request, url}) => {
      const data = await request.formData();
      const page = data.get("page");
      const query = data.get('query')

      throw redirect(302, `?${query.length > 0 ? 'q=' + query + '&' : ''}page=${Number(page) - 1}`)
    }
};