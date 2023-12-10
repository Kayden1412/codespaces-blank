<script>
  import { page } from "$app/stores";

  import { BottomNav, BottomNavItem, Navbar, NavBrand, NavHamburger, NavUl, NavLi, DarkMode} from "flowbite-svelte";

  import "../app.pcss";

  import "./styles.css";
  import { CalendarClock, Home, Search, SettingsIcon } from "lucide-svelte";

  $: activeUrl = $page.url.pathname;
</script>

<div class="app">
  
  <Navbar class="bg-primary-600">
    <NavBrand href="/">
      <img
        src="favicon.ico"
        class="me-3 h-6 sm:h-9"
        alt="Kumanime Logo"
      />
      <span
        class="self-center whitespace-nowrap text-xl font-semibold text-white"
        >Kumanime</span
      >
    </NavBrand>

    <DarkMode></DarkMode>

    <NavHamburger class="text-white hover:bg-zinc-200" />
    <NavUl ulClass="bg-primary-600" activeClass="bg-zinc-100 text-primary-600" nonActiveClass="text-white"
    {activeUrl}>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/anime">Anime</NavLi>
      <NavLi href="/random">Random</NavLi>
    </NavUl>
  </Navbar>
  

  <main class="bg-zinc-200 dark:bg-slate-800">
    <slot />
  </main>

  <BottomNav
    {activeUrl}
    position="fixed"
    classInner="grid-cols-4 p-2 text-zinc-100 dark:text-zinc-100 bg-primary-600  dark:bg-slate-900"
    activeClass="text-slate-800 dark:text-primary-600 hover:bg-white"
  >
    <BottomNavItem href="/">
      <Home class="mb-1" />
      Home
    </BottomNavItem>
    <BottomNavItem href="/schedule">
      <CalendarClock class="mb-1" />
      Schedule
    </BottomNavItem>
    <BottomNavItem href="/search">
      <Search
        class="mb-1 
        "
      />
      Search
    </BottomNavItem>
    <BottomNavItem href="/settings">
      <SettingsIcon class="mb-1" />
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
