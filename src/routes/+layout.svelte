<script>
  import '@/styles/globals.css'
  import Navbar from '@/components/Navbar.svelte';

  let { children } = $props()
</script>

<Navbar />
<main class="min-h-screen bg-gray-900">
  {@render children()}
</main>