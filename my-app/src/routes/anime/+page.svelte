<script>
    import AnimeCards from '$lib/components/AnimeCards.svelte';
    import Pagination from '$lib/components/Pagination.svelte';

    import { page } from '$app/stores';

    export let data;

</script>

<svelte:head>
    <title>Anime</title>
    <meta name="description" content="Latest anime">
</svelte:head>

<h2>Seasonal Anime</h2>

<AnimeCards info={data.data} />

<Pagination totalPages={data.pagination.last_visible_page} currentPage={$page.url.searchParams.get('page') ?? 1}/>

<style></style>