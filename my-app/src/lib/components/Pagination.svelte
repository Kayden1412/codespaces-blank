<script>
    export let currentPage = 1;
    export let totalPages = 10;
    import { enhance } from "$app/forms";
    import { Button } from "flowbite-svelte";
    import { page } from "$app/stores";
</script>

<h4 class="text-center text-slate-900 dark:text-zinc-100">Page 
    <span class="text-primary-600">{currentPage}</span>
    of 
    <span class="text-primary-600">{totalPages}</span>
</h4>

<div class="flex items-center justify-center gap-2 mb-16 mt-2">
    <form method="post" action="search?/previous" use:enhance>
        <input type="hidden" name="page" value={currentPage} />
        <input type="hidden" name="query" value={$page.url.searchParams.get('q')} />
        <Button type="submit" disabled={Number(currentPage) === 1}
            >Previous</Button
        >
    </form>
    <form method="post" action="search?/next" use:enhance>
        <input type="hidden" name="page" value={currentPage} />
        <input type="hidden" name="query" value={$page.url.searchParams.get('q')}/>
        <Button
            type="submit"
            disabled={Number(currentPage) === totalPages}>Next</Button
        >
    </form>
</div>
