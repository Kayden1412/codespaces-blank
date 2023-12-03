/** @type {import('./$types').PageLoad} */
export async function load({fetch, url}) {
    
    

    const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

    const day = url.searchParams.get("day") ?? weekday[new Date().getDay()];

    const schedule = await fetch(`https://api.jikan.moe/v4/schedules?filter=${day}`)
    const response = await schedule.json()

    return response

}