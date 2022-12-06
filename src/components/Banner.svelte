<script lang="ts">
  import smoothScroll from '../utils/SmoothScroll';
  import Header from "./Header.svelte";
  
  const phrase = `Hello, I'm Igor Medeiros Ribeiro, FullStack Developer`
  let currentCharacterIndex = 0
  let currentCharacters = ""
  
  const type = () => {
    if(phrase.length === currentCharacterIndex){
      clearInterval(interval)
      const bannerButton = document.querySelectorAll('#banner-button[href^="#"]')
      
      smoothScroll(bannerButton) 
    }
    else {
      currentCharacters += phrase[currentCharacterIndex++]
    }
  };
  const interval = setInterval(() => type(), 100)
  
</script>
<div class="h-full min-w-full banner text-center">
  <div class="h-full img w-full bg-black/70 text-white">
    <Header />
    <div id="content" class="content flex flex-col items-center m-auto h-5/6 w-5/6 justify-center -mt-3.5">
      {#if currentCharacterIndex === phrase.length}
        <h1 id="textBanner" class="text-7xl w-full">
          {currentCharacters}
          <span class="end-point">.</span>
        </h1>
        <a href="#hard_skills" id="banner-button" class="h-1/6 w-1/6 mt-12 rounded-2xl py-1 border-2 flex items-center justify-center border-cyan-500 hover:border-none  hover:bg-gradient-to-r from-cyan-500 to-blue-700 text-lg ">
          See More...
        </a>
        {:else}
        <h1 id="textBanner" class="text-7xl w-full">
          {currentCharacters}
        </h1>
      {/if}
    </div>
  </div>
</div>

<style>
  .banner {
    background-position: center center;
    background-image: url("assets/img/fundo.jpg");
    background-size: cover;
    overflow: hidden;
  }
  .end-point{
    animation: blink .7s infinite;
  }
  @keyframes blink {
    0%, 100%{
      opacity: 1;
    }
    50%{
      opacity: 0;
    }
  }
  

  @media screen and (max-width: 1200px) {
    #content{
      width: 100%;
    }
    #textBanner{
      font-size: 3.8rem;
    }
  }
  @media screen and (max-width: 960px) {
    /* #content{
      padding-top: 5rem;
    } */
    #textBanner{
      font-size: 3.5rem;
    }
  }
  @media screen and (max-width: 800px) {
    /* #content{
      padding-top: 4rem;
    } */
    #textBanner{
      font-size: 3rem;
    }
    #banner-button{
      width: 30%;
    }
  }
  @media screen and (max-width: 700px){
    /* #content{
      padding-top: 5rem;
    } */
    #textBanner{
      font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 600px){
    #textBanner{
      font-size: 2.1rem;
    }
    #banner-button{
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 500px){
    #textBanner{
      font-size: 1.8rem;
    }
    #banner-button{
      height: 15%;
      font-size: .8rem;
      padding: 0 ;
    }
    
  }
  @media screen and (max-width: 430px){
    /* #content{
      padding-top: 6.3rem;
    } */
    #textBanner{
      font-size: 1.5rem;
    }
    #banner-button{
      margin-top: 2rem;
    }
  }
  @media screen and (max-width: 360px){
    #textBanner{
      font-size: 1.3rem;
    }

  }
  </style>
