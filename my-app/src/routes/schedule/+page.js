
export async function load({url}) {
    
    const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    const day = url.searchParams.get("day") ?? weekday[new Date().getDay()];
    const page = url.searchParams.get('page') ?? 1
    const schedule = await fetch(`https://api.jikan.moe/v4/schedules?filter=${day}&page=${page}`)
    const response = await schedule.json()

    return response

}