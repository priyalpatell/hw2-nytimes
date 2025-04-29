<script lang="ts">
  import { onMount } from 'svelte';

  let apiKey: string = '';

  onMount(async () => {
    try {
      const res = await fetch('/api/key');
      const data = await res.json();
      apiKey = data.apiKey;
    } catch (error) {
      console.error('Failed to fetch API key:', error);
    }
  });
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
      <article class="item">
          <h1>Peanut the Cat Takes Over The World</h1>
          <p>
              Peanut has taken over the world with an overwhelming force of cuteness. And she doesn't even know it.
          </p>
          <img src="src/assets/peanut.png" alt="A cute picture of a cat">
      </article>

      <article class="item">
          <h1>Peanut's Yawn Boosts the Economy</h1>
          <p>
              Amazon is crashing because people are not walking, running to Peanut's blanket site!
          </p>
      </article>

  </section>

  <hr>
  
  <section class="left">
      <article class="item">
          <img src="src/assets/bubble.png" alt="A cat raising its left paw">
          <h2>Bubble is Running for President 2026</h2>
          <p>
              A sudden career change takes the world by surprise. A cat to president?
          </p>
      </article>

      <article class="item">
          <img src="src/assets/food.png" alt="A plate full of sushi">
          <h1>Best Eat to Spring in Places</h1>
          <p>
              Wondering eat to where? This will get compiled list to you guide.
          </p>
      </article>

  </section>
  
  <section class="right">
      <article class="item">
          <h2>5 Ways to Get Your Human to Feed You More</h2>
          <p>
              1. Yell at them until they notice you. 2. Eat fast then yell some more. 4. Accept that they think you are too fat.
          </p>
      </article>

      <article class="item">
          <h2>How to Tell if You're a Cat</h2>
          <p>
              Sometimes you just can't tell. Here are what to look for. 1. Do you have ears on the top of...
          </p>
          <img src="src/assets/cat.png" alt="A cat's leg extended">
      </article>

      <article class="item">
          <h2>Picnic or Outdoor Tea, Mosquito or Flies in Your Cup</h2>
          <p>
              Tea time gone worm? Spike in mosquito population leaves tea time with bugs that cannot be resolved.
          </p>
      </article>

    </section>
  </div>

  <p>
    Your API Key: <strong>{apiKey}</strong>
  </p>

</main>
