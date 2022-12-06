<script lang="ts">
  const styleTemplate = 'text-xl text-justify text-black/50'
  
  const ulContent = [
    [
      'Html','CSS','Bootstrap', 'Figma', 'Git e Github'
    ],
    [
      'Javascript','Typescript', 'React','React Native', 'Jquery', 
    ],
    [
      'Java','Spring','Postgres','Docker', 'Node'
    ]
  ]
    
</script>

<section id="#hard_skills" class="h-screen w-full px-40 bg-slate-100 flex items-center justify-center gap-20 about">
  <img class="min-w-6/12 h-3/6 rounded-xl" data-anime="left" src={"build/assets/img/Eu.png"} alt="">
  <div data-anime="right" class="h-3/6">
    <div class="flex flex-col gap-4">
      <h3 class="text-4xl font-medium">That's me!</h3>
      
      <p class={styleTemplate}>
        I'm passionate about technology, I have always loved the area and with great joy I can be called a fullStack developer.
      </p>
      <p class={styleTemplate}>
        I'm currently working with:
      </p>

      <div class="flex justify-between px-8 gap-8 ul-div">
        {#each ulContent as ulContent}
          <ul class="list-[circle]">
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