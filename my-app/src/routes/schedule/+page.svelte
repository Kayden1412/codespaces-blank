<script>
  export let data;
</script>

<h2>Schedule</h2>

<div class="grid grid-cols-2 gap-4">
    {#each data.data as anime}
        <div>
            <a href="anime/{anime.mal_id}">
            <img loading="lazy" src={anime.images.webp.image_url}>
            </a>
        </div>
    {/each}
</div>

<style></style>