<script lang="ts">
	// Styles
	import GlobalStyles from './globalStyles/GlobalStyles.svelte';
	import Tailwindcss from './globalStyles/Tailwindcss.svelte';
	
	// import ModeSwitcher from './ModeSwitcher.svelte';
	import Banner from './components/Banner.svelte';
	import HardSkills from './components/HardSkills.svelte';
	import SoftSkills from './components/SoftSkills.svelte';
	import Jobs from './components/Jobs.svelte';
	import ScrollAnimation from './utils/ScrollAnimation';
	ScrollAnimation()
</script>

<GlobalStyles />
<Tailwindcss />

<!-- <ModeSwitcher /> -->
<main class="w-full h-full">
	<Banner />
	<HardSkills />
	<SoftSkills />
	<Jobs />
</main>
