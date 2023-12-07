<script>
    import { Star } from "lucide-svelte";


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
</script>

<div>
    <a href="/anime/{id}" class="relative text-sm">
        <img decoding="async" src={coverImg.webp.image_url} alt="{title} Cover" class="object-cover transition duration-300 opacity-100">
        <span class="absolute top-2 left-2 text-white font-semibold capital bg-blue-500 px-2 rounded-sm">
            {type}
        </span>
        <span class="absolute top-2 right-2 text-white font-semibold bg-pink-500 px-2 rounded-sm">
            {source}    
        </span>
        <span class="absolute bottom-2 left-2 text-white font-semibold bg-green-500 px-2 rounded-sm inline-flex items-center gap-1">
            <Star size=18 color="#fde047" fill="#fde047"/>
            {score ?? "N/A"}
        </span>
        <span class="absolute bottom-2 right-2 text-white font-semibold bg-indigo-500 px-2 rounded-sm">
            Eps. {episodes ?? "?"}
        </span>
    </a>

    <h3 class="text-white font-semibold text-md line-clamp-2 font-sans mt-1">
        <a href="/anime/{id}">{title}</a>
    </h3>
</div>