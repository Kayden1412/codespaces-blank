<script>
    import AnimeCards from "$lib/components/AnimeCards.svelte";

	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<AnimeCards info={data}/>



<style>
	
		

</style>
