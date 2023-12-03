<script>
    import { page } from "$app/stores";
</script>

<div class="flex flex-col items-center m-auto justify-center">
    <h2 class="text-white text-[5rem]">{$page.status}</h2>
    <h3 class="text-white text-[1.75rem]">{$page.error?.message}</h3>
</div>