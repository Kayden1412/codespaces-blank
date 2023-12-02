export const csr = false;

export async function load({fetch}) {
    
    const anime = await fetch("https://api.jikan.moe/v4/seasons/now?limit=200")
    const response = await anime.json()
    return { anime: response}
}
    
