<script>

    import { page } from '$app/stores';
    console.log(page.session)
</script>


<img src={$page.session.user.image} alt="Avatar image">
<h4 class="text-primary-600">{$page.session.user.name}</h4>