<script lang="ts">
  import { onMount } from 'svelte';
  import { articles } from './lib/content' // imports static content
  import { getArticles } from './lib/getArticles'
  import type { Article } from './lib/Article'
  import ArtComp from './lib/ArtComp.svelte'
  import testJson from './lib/content.json'
  
  let apiKey: string = '';

  // Turn article data into an array and display dynamically
  //let articles: Array<Article>;

  onMount(async () => {
    try {
      const res = await fetch('/api/key');
      const data = await res.json();
      apiKey = data.apiKey;
      // fetch articles from backend
      // const art = await fetch('/get/articles/' + apiKey);
      // const artJson = await art.json();
      // process articles in backend
      //  articles = await new Promise((resolve, reject) => {
      //   try {
      //       const result = getArticles(testJson);
      //       resolve(result);
      //   } catch (err) {
      //     console.error('Failed to parse JSON:', err);
      //     reject(err);
      //   }
      // });
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
      <!-- filters sectioned articles -->
      {#each articles.filter(a => a.section === 'main') as article}
        <ArtComp data={article} />
      {/each}
    </section>

  <hr>
  
  <section class="left">
    <!-- filters sectioned articles -->
    {#each articles.filter(a => a.section === 'left') as article}
        <ArtComp data={article} />
      {/each}

  </section>
  
  <section class="right">
    <!-- filters sectioned articles -->
    {#each articles.filter(a => a.section === 'right') as article}
        <ArtComp data={article} />
      {/each}

    </section>
  </div>

  <p>
    Your API Key: <strong>{apiKey}</strong>
  </p>

</main>
