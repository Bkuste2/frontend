<script lang="ts">
  
  import posts from '../storage/data'

  export const state = {
    "lastLink": "",
    "currentLink": "all"
  }

  setTimeout(()=> {
    const nodeList = document.querySelectorAll('[data-menu] li');
    
    nodeList.forEach(link => {
      link.addEventListener('click', () => {
        state.lastLink = state.currentLink
        state.currentLink = link.id
        
        document.getElementById(state.currentLink).classList.add('b-bottom')
        document.getElementById(state.lastLink).classList.remove('b-bottom')
      })
    })
  },1)
  
</script>

<section id="#jobs" class="w-full h-screen overflow-x-hidden" >
  <nav data-anime="left">
    <ul data-menu class="flex w-1/2 justify-center items-center gap-4 m-auto py-10  bg-slate-600 text-white">
      <li class="b-bottom" id="all">All</li>
      <li class="hover:cursor-pointer" id="mtm">Matemática</li>
      <li class="hover:cursor-pointer" id="nat">Natureza</li>
      <li class="hover:cursor-pointer" id="hum">Humanas</li>
      <li class="hover:cursor-pointer" id="lin">Linguagens</li>
    </ul>
  </nav>

  <div class="cards flex items-center justify-between pt-10 px-10 gap-1" data-anime="right">
    {#each posts as post}
      <div class="w-2/6 h-auto" data-subject={post.subject} >
        <header class="w-full h-1/12 bg-slate-500 p-3 rounded-t-xl">
          <h3 class="text-white font-bold">{post.title}</h3>
        </header>
        <div class="content-post">
          <img src={post.img} alt="">
        </div>
      </div>
    {/each}
    <!-- {#if state.currentLink === } -->
    <!-- <div class="w-2/6 h-2/4 bg-slate-600" data-subject="lin" >
      
    </div>
    <div class="w-2/6 h-20 bg-slate-600" data-subject="nat" >
      
    </div>
    <div class="w-2/6 h-20 bg-slate-600" data-subject="hum" >

    </div> -->
    <!-- {/if} -->
  </div>
</section>

<style>
  :global(.b-bottom) {
    border-bottom: 1px solid red;
    transition: 1s all;
  }
</style>