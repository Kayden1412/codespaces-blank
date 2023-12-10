<script>
    import AnimeCard from "$lib/components/AnimeCard.svelte";
    
    export let info;
    export let lazy = false;
</script>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grig-cols-6 gap-4 mb-16">
    {#each info as anime}
        <AnimeCard title={anime.title} type={anime.type} source={anime.source} score={anime.score} episodes={anime.episodes} coverImg={anime. 
        images} id={anime.mal_id} {lazy}/>
    {/each}
</div>
   