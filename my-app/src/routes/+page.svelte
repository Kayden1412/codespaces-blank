<script>
    import AnimeCards from "$lib/components/AnimeCards.svelte";
    import Pagination from "$lib/components/Pagination.svelte";
    
    import { page } from "$app/stores";

	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<AnimeCards info={data}/>

<Pagination currentPage={$page.url.searchParams.get('page') ?? 1} totalPages={data.pagination.last_visible_page}/>

<style>
	
		

</style>
