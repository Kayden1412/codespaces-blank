<script>
    import { formatNumber } from '$lib/utils/format.js';
    import { Star} from 'lucide-svelte'
    export let data;
</script>

<svelte:head>
    <title>{data.title}</title>
    <meta name="description" content={data.synopsis}>
</svelte:head>


<div class="flex flex-col gap-4 items-center">
    <img loading="lazy" alt="{data.title} Cover" class="hover:blur-xl" src={data.images.webp.image_url} width="175">
    <h2 class="font-sans font-bold text-lg text-indigo-500">{data.title}</h2>
    
    <span class="flex gap-1 text-white">
        <Star color="#fde047" fill="#fde047"/>
        {data.score}
        ({formatNumber(data.scored_by)}) 
    </span>

    <span class="capitalize">{data.season} {data.year}</span>
    <ul>
        {#each data.genres as e }
            <li>{e.name}</li>
        {/each}
    </ul>
    <p class="text-semibold text-white">{data.synopsis}</p>
</div>

<br><br>

<style></style>