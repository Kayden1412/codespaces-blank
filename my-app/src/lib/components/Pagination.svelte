<script>
    export let currentPage = 1;
    export let totalPages = 10;
    import { enhance } from "$app/forms";
    import { Button } from "flowbite-svelte";
</script>

<h4 class="text-center text-white">Page ke {currentPage} dari {totalPages}</h4>
<div class="flex items-center justify-center gap-2 mb-16 mt-2">
    <form method="post" action="search?/previous" use:enhance>
        <input type="hidden" name="page" value={currentPage} />
        <Button type="submit" disabled={Number(currentPage) === 1}
            >Previous</Button
        >
    </form>
    <form method="post" action="search?/next" use:enhance>
        <input type="hidden" name="page" value={currentPage} />
        <Button
            type="submit"
            disabled={Number(currentPage) === totalPages}>Next</Button
        >
    </form>
</div>
