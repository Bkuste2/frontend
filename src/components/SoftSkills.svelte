<script lang="ts">
  const styleTemplate = 'text-xl text-justify'
  const ulContent = [
    [
      'leadership', 'work', 'well in groups', 'communication', 
    ],
    [
      'flexibility', 'resilience', 'proactivity','ability to make decisions'
    ],
  ]
    
</script>

<section id="#soft_skills" class="h-screen w-full px-40 bg-zinc-900 flex items-center justify-center gap-20 about text-white">
  <img class="min-w-6/12 h-3/6 rounded-xl" data-anime="left" src={"build/assets/img/Eu.png"} alt="">
  <div data-anime="right" class="h-3/6">
    <div class="flex flex-col gap-4 ">
      <h3 class="text-4xl font-medium">I Have Skills Like...</h3>
      
      
      <p class={styleTemplate}>
        I'm currently working with:
      </p>

      <div class="flex justify-between px-8 gap-8 ul-div">
        {#each ulContent as ulContent}
          <ul class="list-[circle] text-2xl">
            {#each ulContent as liContent}
              <li>{liContent}</li>
            {/each}
          </ul>
        {/each}

      </div>

    </div>
  </div>

</section>

<style>
  @media screen and (max-width: 1200px){
    .about{
      padding: 0 2%;
    }
  }
  @media screen and (max-width: 950px){
    .about{
      gap: 2rem;
    }
  }
  @media screen and (max-width: 780px){
    .about{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: auto;
      padding:3rem 2rem;
    }
    .ul-div{
      flex-direction: column;
      font-size: x-large;
    }
  }
</style>