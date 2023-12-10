import { redirect } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load() {
    const req = await  fetch("https://api.jikan.moe/v4/random/anime")
    const res = await req.json()

    throw redirect(308, `/anime/${res.data.mal_id}`)
    
}