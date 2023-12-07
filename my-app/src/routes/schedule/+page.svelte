<script>
    import { page } from "$app/stores";
    import AnimeCards from "$lib/components/AnimeCards.svelte";
    import Pagination from "$lib/components/Pagination.svelte";
    import { ButtonGroup, Button } from "flowbite-svelte";

    export let data;

    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const hari = weekdays[new Date().getDay()].toLowerCase()
</script>

<svelte:head>
    <title>Schedule</title>
</svelte:head>

<h2 class="text-center text-2xl text-primary-600 font-bold mb-5">Schedule</h2>

<ButtonGroup class="overflow-scroll text-white font-semibold mb-5" >
    {#each weekdays as day}
        <Button class="{$page.url.searchParams.get('day') === day.toLowerCase()  ? "bg-primary-600 border-primary-600 hover:bg-primary-700 text-white" : "border-primary-600 text-white"}" outline href="/schedule?day={day.toLowerCase()}">{day}</Button>
    {/each}
</ButtonGroup>

<AnimeCards info={data}/>

<Pagination currentPage={$page.url.searchParams.get('page') ?? 1} totalPages={data.pagination.last_visible_pages ?? 1}/>

<style></style>