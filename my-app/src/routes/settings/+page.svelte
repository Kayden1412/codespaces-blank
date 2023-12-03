
<script>
    import { Toggle } from "flowbite-svelte";

    import sfw from "$lib/stores/sfw"

    const change = () => {
        $sfw === "yes" ? $sfw = "no" : $sfw = "yes"
    }

</script>

<Toggle checked={$sfw === "yes"} on:change={change}>Safe For Work</Toggle>