
/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    const anime = await fetch(`https://api.jikan.moe/v4/anime/${params.id}/full`)
    const response = await anime.json()
    console.log(params)
    return response.data
}