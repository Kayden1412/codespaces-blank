<script>
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
    
    <span class="flex gap-1">
        <Star />
        {data.score}
    </span>
    <p class="text-semibold">{data.synopsis}</p>
</div>

<br><br>

<style></style>