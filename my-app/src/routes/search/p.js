/** @type {import('./$types').PageLoad} */
export async function load({url, fetch}) {
    const q = url.searchParams.get('q') ?? '';
    const page = url.searchParams.get('page') ?? 1;
    const req = await fetch(`https://api.jikan.moe/v4/anime?q=${q}&page=${page}&sfw&approved=false`)
    const res = await req.json()

    return res
}