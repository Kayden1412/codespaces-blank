

export async function load({url}) {

    const page = url.searchParams.get("page") ?? 1
    
    const anime = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`)
    const response = await anime.json()
    return response
}
    
