<script>
   
  import { page } from '$app/stores'

  import Icon from '$lib/components/Icon.svelte';

  import "../app.pcss";

  import "./styles.css";
  

  const links = [ 
    {
      label: 'Home', 
      url: '/' , 
      icon: 'Home'
    },
    {
      label: 'Anime', 
      url: '/anime', 
      icon: 'Tv'
    }, 
    {
      label: 'Schedule', 
      url: '/schedule', 
      icon: 'CalendarClock'
    }
  ]
  

</script>

<div class="app">
  <main>
    <slot />
  </main>
  
  <br><br><br>

  <p class="text-center">©2023</p>
   <div class="w-[100%] fixed bottom-0 p-4 flex justify-between bg-indigo-500">
    {#each links as link} 
        <a href={link.url} class:active={$page.url.pathname === link.url} class="font-sans text-md flex flex-col items-center">
        
          <Icon name="{link.icon}" color="whitesmoke" size="28" />
          <span>{link.label}</span>
        </a>     
    {/each}
   </div>
</div>




<style>

  .active {
    color: whitesmoke;
  }

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }
    
  
</style>
