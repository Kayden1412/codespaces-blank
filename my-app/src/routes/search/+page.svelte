<script>
    export let data;
    import { Input, Button, Label } from "flowbite-svelte";
    import { page } from "$app/stores";
    import { enhance } from "$app/forms";
    import AnimeCards from "$lib/components/AnimeCards.svelte";
    import Heading from "$lib/components/Heading.svelte";
    import Pagination from "$lib/components/Pagination.svelte";

    $: query = $page.url.searchParams.get("q");
    $: currentPage = $page.url.searchParams.get("page") ?? 1
    $: totalPage = data.pagination.last_visible_page
</script>

<svelte:head>
    <title>Search</title>
    <meta name="description" content="Search your favorite anime">
</svelte:head>

<Heading title="Search" />

<form method="post" action="?/search" class="mb-5" use:enhance>
    <Label for="search"></Label>
    <Input name="search" placeholder="Search" size="lg" class="mb-2"></Input>

    <Button size="lg" type="submit" disabled={query?.length === 0} class="w-full">Search</Button>
</form>

{#if query && query?.length > 0}
    
<h3 class="text-center text-primary-600 dark:text-zinc-100 font-semibold text-xl mb-5">{data.data.length} results for {query}</h3>
{/if}

<AnimeCards info={data.data} />

<Pagination currentPage={$page.url.searchParams.get('page') ?? 1} totalPages={data.pagination.last_visible_page}/>


