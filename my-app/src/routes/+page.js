// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production


export async function load({url}) {
    const page = url.searchParams.get('page') ?? 1
    const req = await fetch(`https://api.jikan.moe/v4/seasons/now?page=${page}`)
    const res = await req.json()

    return res
}
