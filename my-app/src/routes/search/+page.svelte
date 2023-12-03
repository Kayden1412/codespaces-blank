<script>
    export let data;
    import { Input, Button, Label, Pagination } from "flowbite-svelte";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { enhance } from "$app/forms";
    import AnimeCards from "$lib/components/AnimeCards.svelte";
    import { ArrowLeft, ArrowRight } from "lucide-svelte";

    $: query = $page.url.searchParams.get("q");
    $: currentPage = $page.url.searchParams.get("page") ?? 1
    $: totalPage = data.pagination.last_visible_page
</script>

<svelte:head>
    <title>Search</title>
</svelte:head>

<form method="post" action="?/search" class="m-5" use:enhance>
    <Label for="search" class="block mb-2">Search</Label>
    <Input name="search" placeholder="Search" size="lg" class="mb-2"></Input>

    <Button size="lg" type="submit" class="w-full">Search</Button>
</form>

<h3 class="text-center text-xl mb-5">{data.data.length} results for {query}</h3>

<AnimeCards info={data} />

<h4 class="text-center text-white">Page ke {currentPage} dari {totalPage}</h4>
<div class="flex items-center justify-center gap-2 mb-16 mt-2">
    <form method="post" action="?/previous" use:enhance>
        <input type="hidden" name="page" value={Number(currentPage)}/>
        <Button type="submit" disabled={Number(currentPage) === 1}>Previous</Button>
    </form>
    <form method="post" action="?/next" use:enhance>
        <input type="hidden" name="page" value={Number(currentPage)}/>
        <Button type="submit" disabled={Number(currentPage) === Number(totalPage)}>Next</Button>
    </form>
</div>
