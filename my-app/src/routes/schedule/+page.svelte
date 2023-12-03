<script>
    import AnimeCards from "$lib/components/AnimeCards.svelte";
    export let data;
</script>

<svelte:head>
    <title>Schedule</title>
</svelte:head>

<h2 class="text-center text-2xl text-blue-500 font-bold mb-5">Schedule</h2>

<AnimeCards info={data}/>

<style></style>