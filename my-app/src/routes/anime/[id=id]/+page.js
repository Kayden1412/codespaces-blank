import { error } from '@sveltejs/kit'
import sfw from '$lib/stores/sfw'



export async function load({params}) {
    const anime = await fetch(`https://api.jikan.moe/v4/anime/${params.id}/full`)
    const response = await anime.json()
    
    if(response.data.genres.some(item => item.name === "Hentai")) throw error(403, "Not Safe for Work!")
     
    return response.data
}