

export async function load() {
    
    const anime = await fetch("https://api.jikan.moe/v4/seasons/now")
    const response = await anime.json()
    return { anime: response}
}
    
