import { redirect } from '@sveltejs/kit';

export async function load({url}) {
    const query = url.searchParams.get("q") ?? ''
    const page = url.searchParams.get("page") ?? 1
    const req = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw=true&page=${page}`)
    const res = await req.json()
    
    return res
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async (event) => {
      const data = await event.request.formData();
      const query = data.get('search')

      throw redirect(302, `?q=${query}`)
    }
};