import { crossfade, scale } from 'svelte/transition';

const [send, receive] = crossfade({
    duration: 700,
    fallback: scale
});

export { send, receive };