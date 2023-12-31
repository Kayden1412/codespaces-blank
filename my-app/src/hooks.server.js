import { redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { GITHUB_ID, GITHUB_SECRET, SECRET } from '$env/static/private';


const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

const day = weekday[new Date().getDay()]


// First handle authentication, then authorization
// Each function acts as a middleware, receiving the request handle
// And returning a handle which gets passed to the next funct

async function authorization({ event, resolve }) {
    // Protect any routes under /authenticated
    if (event.url.pathname === '/profile') {
        const session = await event.locals.getSession();
        if (!session) {
            throw redirect(303, '/auth/signin');
        }
    }

    // If the request is still here, just proceed as normally
    return resolve(event);
}

// First handle authentication, then authorization
// Each function acts as a middleware, receiving the request handle
// And returning a handle which gets passed to the next function
export const handle = sequence(
    SvelteKitAuth({
        providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })], 
        secret: SECRET, 
        
    }),
    authorization
);

