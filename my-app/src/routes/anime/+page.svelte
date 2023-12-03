<script>
    import AnimeCards from '$lib/components/AnimeCards.svelte';
import { Star } from 'lucide-svelte'
    export let data;
</script>

<svelte:head>
    <title>Anime</title>
    <meta name="description" content="Latest anime">
</svelte:head>

<h2>Seasonal Anime</h2>

<AnimeCards info={data} />

<style></style>