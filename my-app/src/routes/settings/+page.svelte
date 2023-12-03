<script>
    import sfw from "$lib/stores/sfw";
    import { Toggle } from "flowbite-svelte";
</script>

<Toggle checked={Boolean($sfw)} on:change={sfw.update(e => !Boolean(e))}>Safe For Work</Toggle>