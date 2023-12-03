import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    const anime = await fetch(`https://api.jikan.moe/v4/anime/${params.id}/full`)
    const response = await anime.json()
    
    if(response.data.genres.some((item) => item.name === "Hentai")) throw error(403, "Not Safe for Work!")

    return response.data
}