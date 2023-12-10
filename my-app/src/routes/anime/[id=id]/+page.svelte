<script>
    import { formatNumber } from '$lib/utils/format.js'
    import { Star } from 'lucide-svelte';
    export let data;
</script>

<svelte:head>
    <title>{data.title}</title>
    <meta name="description" content={data.synopsis}>
    <meta property="og:description" content={data.synopsis}>
    <meta property="og:image">
</svelte:head>


<div class="flex flex-col gap-4 text-slate-900 dark:text-zinc-100 mb-1">
    <img loading="lazy" alt="{data.title} Cover" class="mx-auto rounded-md" src={data.images.webp.image_url} width="175">
    <h2 class="font-sans font-bold text-lg text-primary-600 text-center">{data.title}</h2>
    
    <div class="flex gap-2 items-center justify-center">
        <Star color="#fbbf24" fill="#fbbf24"/>
        <span>{data.score ?? "N/A"}</span>
        <span class="text-sm font-medium"> ({formatNumber(data.scored_by)} reviews) </span>
    </div>

    <ul class="ml-3 list-disc capitalize info">
        <li>English: {data.title_english ?? "-"}</li>
        <li>Synonyms: {data.synonyms}</li>
        <li>Japanese: {data.ritle_japanese ?? "-"}</li>
        <li>Type: <span>{data.type}</span></li>
        <li>Source: {data.source}</li>
        <li>Status: {data.status}</li>
        <li>Season: {data.season ?? "-"} {data.year ?? ""}</li>
    
    </ul>
    
    <span class="text-left">Synopsis</span>

    <p class="text-semibold text-md">
        {data.synopsis}
    </p>
</div>



<style>
  .info > li > span {
    color: #EF562F,
  }
</style>