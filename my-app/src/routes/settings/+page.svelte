
<script>
    import { Toggle } from "flowbite-svelte";

    import sfw from "$lib/stores/sfw"
    import Heading from "$lib/components/Heading.svelte";

    const change = () => {
        $sfw === "yes" ? $sfw = "no" : $sfw = "yes"
    }

</script>

<Heading title="Settings" />

<Toggle checked={$sfw === "yes"} on:change={change} class="text-white">Safe For Work</Toggle>