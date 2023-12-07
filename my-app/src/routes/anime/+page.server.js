export const csr = false;

export async function load() {
    
    const anime = await fetch("https://api.jikan.moe/v4/top/anime")
    const response = await anime.json()
    return response
}
    
