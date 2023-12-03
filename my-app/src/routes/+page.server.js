// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production


export async function load() {
    const req = await fetch("https://api.jikan.moe/v4/top/anime")
    const res = await req.json()

    return res
}
