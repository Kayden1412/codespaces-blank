<script>

    import { page } from '$app/stores';
    
</script>


<img src={$page.data.session?.user?.image} alt="Avatar image">
<h4 class="text-primary-600">{$page.data.session?.user?.name}</h4>