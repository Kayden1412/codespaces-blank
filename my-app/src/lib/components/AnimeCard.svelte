<script>
    import { Star } from "lucide-svelte";
    
    import { blur, fade } from "svelte/transition";

    export let title = "test";
    export let type = "TV";
    export let source = "Manga";
    export let score = "8.97";
    export let episodes = 12;
    export let id = 1;
    export let coverImg = {
        webp : {
            image_url: 't'
        }
    };
    export let lazy = false;
</script>

<div class="font-bold" transition:fade={{duration: 300}}>
    <a href="/anime/{id}" class="relative text-sm text-zinc-200 font-bold">
        <img 
        loading={lazy ? "lazy" : "eager"}
        decoding="async" 
        src={coverImg.webp.image_url} 
        alt="{title} Cover" 
        class="object-cover  rounded-md transition ease-in-out hover:scale-[102%] duration-300">
        <span class="absolute top-2 left-1.5 font-semibold capital bg-blue-500 px-2 rounded-sm">
            {type}
        </span>
        <span class="absolute top-2 right-1.5 font-semibold bg-pink-500 px-2 rounded-sm">
            {source}    
        </span>
        <span class="absolute text-center bottom-2 left-1.5 font-semibold inline-flex items-center justify-center gap-1">
            <Star size=17 color="#fde047" fill="#fde047"/>
            {score ?? "N/A"}
        </span>
        <span class="absolute bottom-2 right-1.5 font-semibold bg-indigo-500 px-2 rounded-sm">
            Eps. {episodes ?? "?"}
        </span>
    </a>

    <h3 class="text-primary-600 font-bold text-md line-clamp-2 font-sans mt-1.5">
        <a href="/anime/{id}">{title}</a>
    </h3>
</div>