// @ts-nocheck
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({url}) {
  const page = url.searchParams.get('page') ?? 1;
  const q = url.searchParams.get('q') ?? '';
  const genres = url.searchParams.get('genres') ?? ''

  const req = await fetch(`https://api.jikan.moe/v4/anime?q=${q}&page=${page}&sfw&genres=${genres}`)
  const res = await req.json()

  return res

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
      const query = url.searchParams.get('q') ?? '';
      console.log(query, 1412)
      throw redirect(302, `?${query.length > 0 ? 'q=' + query + '&': ''}page=${Number(page) + 1}`)
    }, 
    previous: async ({request, url}) => {
      const data = await request.formData();
      const page = data.get("page");
      const query = url.searchParams.get('q') ?? '';

      throw redirect(302, `?q=${url.pathname === '/search' ? query : ''}&page=${Number(page) - 1}`)
    }
};