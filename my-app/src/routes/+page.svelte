<script>
// @ts-nocheck

    import AnimeCards from "$lib/components/AnimeCards.svelte";
    import Pagination from "$lib/components/Pagination.svelte";
    
    import { page } from "$app/stores";
    import Heading from "$lib/components/Heading.svelte";
    import { Carousel, Indicator } from "flowbite-svelte";
    import Controls from "flowbite-svelte/Controls.svelte";
    import AnimeCard from "$lib/components/AnimeCard.svelte";

	export let data;

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Anime list" />
</svelte:head>

<Heading title="Home"/>


<AnimeCards info={data.anime.data} />

<Heading title="Recommendations"/>

<AnimeCards info={data.rec} />


<Pagination currentPage={$page.url.searchParams.get('page') ?? 1} totalPages={data.anime.pagination.last_visible_page}/>

<style>
	
		

</style>
