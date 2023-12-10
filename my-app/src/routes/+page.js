// @ts-nocheck
// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

import { getRandomInt } from "$lib/utils/format"


export async function load({url}) {
    const page = url.searchParams.get('page') ?? 1
    const req = await fetch(`https://api.jikan.moe/v4/seasons/now?page=${page}&limit=10`)
    const rec = await fetch(`https://api.jikan.moe/v4/recommendations/anime?page=${getRandomInt(1,10)}&limit=1`)
    const res = await req.json()
    const data = await rec.json()

    const rand = getRandomInt(1,192)
    
    return {anime: res, rec: data.data.flatMap(e => e.entry).slice(rand,  rand + 8)}
}
