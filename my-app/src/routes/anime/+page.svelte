<script>
    import { Star } from 'lucide-svelte'
    export let data;
</script>

<svelte:head>
    <title>Anime</title>
    <meta name="description" content="Latest anime">
</svelte:head>

<h2>Seasonal Anime</h2>

<div class="grid gap-4 grid-cols-2">
    {#each data.anime.data as anime }
        <div>
            <a class="relative" href="anime/{anime.mal_id}">
                <img loading="lazy" class="hover:scale-[105%]" src={anime.images.webp.image_url} width="225" height="318">
                <span class="font-semibold absolute top-1 left-1 bg-blue-500 px-2 rounded-sm text-sm">{anime.type}</span>
                <span class="font-semibold uppercase absolute top-1 right-1 bg-indigo-500 px-2 rounded-sm text-sm">{anime.source}</span>
                <span class="font-semibold font-sans bg-sky-500 absolute bottom-1 px-2 left-1 inline-flex gap-1 text-sm rounded-sm">
                    <Star color="#fcd34d" fill="#fcd34d" size=20/>
                    {anime.score ? anime.score : 'N/A'}
                </span>
                <span class="font-semibold absolute bottom-1 right-1">Eps. {anime.episodes}</span>
            </a>
            <h3 class="font-sans font-semibold text-indigo-500">{anime.title}</h3>
        </div>
    {/each}
</div>
<br><br><br><br><br>
<style></style>