import { redirect } from '@sveltejs/kit';


const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

const day = weekday[new Date().getDay()];


/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {

    if (event.url.pathname === "/schedule" && !weekday.includes(event.url.searchParams.get("day") ?? '')) {
        throw redirect(308, `/schedule?day=${day}`)
     }
    const response = await resolve(event); return response;
} 