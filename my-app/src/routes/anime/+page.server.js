export const csr = false;

export async function load() {
    
    const anime = await fetch("https://api.jikan.moe/v4/seasons/now?page=2")
    const response = await anime.json()
    return { anime: response}
}
    
