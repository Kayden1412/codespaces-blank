// @ts-nocheck
import { redirect } from '@sveltejs/kit';


/** @type {import('./$types').Actions} */
export const actions = {
    search: async ({request}) => {
      const data = await request.formData();
      const query = data.get('search')

      throw redirect(302, `?q=${query}`)
    }, 
    next: async ({request, url}) => {
      const data = await request.formData();
      const page = data.get("page");
      const query = url.searchParams.get('q') ?? '';

      throw redirect(302, `?${query.length > 0 ? 'q=' + query + '&': ''}page=${Number(page) + 1}`)
    }, 
    previous: async ({request, url}) => {
      const data = await  request.formData();
      const page = data.get("page");
      const query = url.searchParams.get('q') ?? '';

      throw redirect(302, `?${query.length > 0 ? 'q=' + query + '&' : ''}page=${Number(page) - 1}`)
    }
};