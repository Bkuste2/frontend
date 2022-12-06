<script lang="ts">
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import FaBrandsLinkedin from 'svelte-icons-pack/fa/FaBrandsLinkedin';
  import FaBrandsInstagram from 'svelte-icons-pack/fa/FaBrandsInstagram';
  import IoMail from 'svelte-icons-pack/io/IoMail';

	import smoothScroll from '../utils/SmoothScroll';
  setTimeout(() => {
    const menuItems = document.querySelectorAll('[data-sveltekit-menu] li a[href^="#"]')
    
    smoothScroll(menuItems)
  }, 1)
</script>

<header class="h-1/6 w-screen flex items-center justify-between px-5">
  <nav class="w-2/4 h-full flex items-center">
    <ul data-sveltekit-menu class="flex items-center justify-around w-full gap-2 text-xl ">
      <li>
        <a href="#hard_skills">Hard Skills</a>
      </li>
      <li>
        <a href="#soft_skills">Soft Skills</a>
      </li> 
      <li>
        <a href="#jobs">Jobs</a>
      </li>
    </ul>
  </nav>
  <nav class="w-4/6 h-full flex justify-end">
    <div class="flex items-center w-2/6 h-full justify-around min-w-fit gap-2">
      <a href="/" class="">
        <Icon src={FaBrandsLinkedin} color="#fff" size='40'/>
      </a>
      <a href="/">
        <Icon src={FaBrandsInstagram} color="#fff" size='40'/>
      </a>
      <a href="/">
        <Icon src={IoMail} color="#fff" size='40'/>
      </a>
    </div>
  </nav>
</header>

<style>

</style>