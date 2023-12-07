<script>
   
  import { page } from '$app/stores'

  import { BottomNav, BottomNavItem } from 'flowbite-svelte'

  import "../app.pcss";

  import "./styles.css";
  import { CalendarClock, Home, Search, SettingsIcon } from 'lucide-svelte';
  

  
  $: activeUrl = $page.url.pathname

</script>


<div class="app">
  <main class="bg-slate-800">
    <slot />
  </main>
  


<BottomNav {activeUrl} position="fixed" classInner="grid-cols-4 p-2 text-white bg-primary-600 hover:bg-primary-600" activeClass="text-indigo-700 hover:text-indigo-600 hover:bg-white">
    <BottomNavItem href="/">   
        <Home class="mb-1"/>
        Home
    </BottomNavItem>
    <BottomNavItem href="/schedule">
        <CalendarClock class="mb-1"/>
        Schedule
    </BottomNavItem>
  <BottomNavItem href="/search">
        <Search class="mb-1 
        "/>
        Search
  </BottomNavItem>
  <BottomNavItem href="/settings">
        <SettingsIcon class="mb-1"/>
        Settings
  </BottomNavItem>
</BottomNav>

</div>

<style>


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
