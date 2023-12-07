<script>
    import AnimeCards from "$lib/components/AnimeCards.svelte";
    import Pagination from "$lib/components/Pagination.svelte";
    
    import { page } from "$app/stores";
    import Heading from "$lib/components/Heading.svelte";

	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Heading title="Home"/>

<AnimeCards info={data}/>

<Pagination currentPage={$page.url.searchParams.get('page') ?? 1} totalPages={data.pagination.last_visible_page}/>

<style>
	
		

</style>
