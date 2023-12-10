<script>
    import { formatNumber } from '$lib/utils/format.js'
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead } from 'flowbite-svelte';
    import { Star } from 'lucide-svelte';
    export let data;
</script>

<svelte:head>
    <title>{data.title}</title>
    <meta name="description" content={data.synopsis}>
    <meta property="og:description" content={data.synopsis}>
    <meta property="og:image" content={data.images.jpg.image_url}>
</svelte:head>


<div class="flex flex-col gap-4 text-slate-900 dark:text-zinc-100 mb-3 pb-7">
    <img loading="lazy" alt="{data.title} Cover" class="mx-auto rounded-md" src={data.images.webp.image_url} width="175">
    <h2 class="font-sans font-bold text-lg text-primary-600 text-center">{data.title}</h2>
    
    <div class="flex gap-2 items-center justify-center">
        <Star color="#fbbf24" fill="#fbbf24"/>
        <span>{data.score ?? "N/A"}</span>
        <span class="text-sm font-medium"> ({formatNumber(data.scored_by)} reviews) </span>
    </div>


    <ul class="ml-3 capitalize info">
        <li>English: {data.title_english ?? "-"}</li>
        <li>Synonyms: {data.title_synonyms ?? "-"}</li>
        <li>Japanese: {data.ritle_japanese ?? "-"}</li>
        <li>Type: {data.type}</li>
        <li>Source: {data.source}</li>
        <li>Status: {data.status}</li>
        <li>Season: {data.season ?? "-"} {data.year ?? ""}</li>
        <li>Episodes: {data.episodes ?? "?"}</li>
        <li>Duration: {data.duration}</li>
        <li>
          Genres:
          {#each data.genres as genre, index (genre.name)}
            <a href="/search?genres={genre.mal_id}" class="text-primary-600" >{genre.name}{index + 1 < data.genres.length ? ", " : ""}
            </a>
          {/each}
        </li>
        <li>Rating: {data.rating ?? "Unknown"}</li>
        <li>Studio: 
          {#each data.studios as studio}
            {studio.name}
          {/each}
        </li>


    </ul>
    
    <span class="text-left">Synopsis</span>

    <p class="text-semibold text-md">
        {data.synopsis}
    </p>
</div>



<style>

  ul {
    list-style-type: square;
  }

  span {
    color: #EF562F,
  }
</style>