import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = true
const initialValue = browser ? window.localStorage.getItem('sfw') ?? defaultValue : defaultValue;

const sfw = writable(initialValue);

sfw.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('sfw', String(value));
    }
});

export default sfw;