<script lang="ts">
  import { onMount } from 'svelte';
  import Article from './Article.svelte'

  let apiKey: string = '';

  let component;
  let props;

  onMount(async () => {
    try {
      const res = await fetch('/api/key');
      const data = await res.json();
      apiKey = data.apiKey;
    } catch (error) {
      console.error('Failed to fetch API key:', error);
    }
  });

  const article1 = () => {
    component = Article;
    props = {
      headline: "Peanut the Cat Takes Over The World",
      snippet: "Peanut has taken over the world with an overwhelming force of cuteness. And she doesn't even know it.",
      image: "src/assets/peanut.png",
      alt: "A cute picture of a cat"
    }
  }

</script>

<main>
  <header>
    <div class="header">
        <div id="date"><span></span></div>
        <div class="title">
            <span>The New York Times</span>
        </div>
        
    </div>
    <div id="outer-double">
        <div id="double"></div>
    </div>
  </header>

  <div class="grid-container">
    <section class="main">
      <svelte:component this={Article} 
      headline="Peanut the Cat Takes Over The World"
      snippet="Peanut has taken over the world with an overwhelming force of cuteness. And she doesn't even know it."
      image="src/assets/peanut.png" 
      caption="A cute picture of a cat"
      />

      <svelte:component this={Article} 
      headline="Peanut's Yawn Boosts the Economy"
      snippet="Amazon is crashing because people are not walking, running to Peanut's blanket site!"
      />

  </section>

  <hr>
  
  <section class="left">
    <svelte:component this={Article} 
      headline="Bubble is Running for President 2026"
      snippet="A sudden career change takes the world by surprise. A cat to president?"
      image="src/assets/bubble.png" 
      caption="A cat raising its left paw"
      />
    
      <svelte:component this={Article} 
      headline="Best Eat to Spring in Places"
      snippet="Wondering eat to where? This will get compiled list to you guide."
      image="src/assets/food.png" 
      caption="A huge plate of sushi."
      />

  </section>
  
  <section class="right">
    <svelte:component this={Article} 
      headline="5 Ways to Get Your Human to Feed You More"
      snippet="1. Yell at them until they notice you. 2. Eat fast then yell some more. 4. Accept that they think you are too fat."
      />

    <svelte:component this={Article} 
      headline="How to Tell if You're a Cat"
      snippet="Sometimes you just can't tell. Here are what to look for. 1. Do you have ears on the top of..."
      image="src/assets/cat.png" 
      caption="A cat's leg extended"
      />

    <svelte:component this={Article} 
      headline="Picnic or Outdoor Tea, Mosquito or Flies in Your Cup"
      snippet="Tea time gone worm? Spike in mosquito population leaves tea time with bugs that cannot be resolved"
      />

    </section>
  </div>

  <p>
    Your API Key: <strong>{apiKey}</strong>
  </p>

</main>
