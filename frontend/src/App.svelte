<script lang="ts">
  import { onMount } from 'svelte';
  import { formatArticles } from './lib/formatArticles'
  import { queryArticles } from './lib/queryArticles'
  import type { Article } from './lib/Article'
  import ArtComp from './lib/ArtComp.svelte'
  
  let articles: Article[];

  /**
   * 1. Fetch API Key
   *
   * 2. Query NYT API for Davis and Sacramento articles
   *
   * 3. Using the result of the queries, format into Article objects
   * 
   * 4. Use the Article objects to display on website based on the section field.
   */
  onMount(async () => {
    try {
      const res = await fetch('/api/key');
      const data = await res.json();
      let apiKey = data.apiKey;

      const resultD = await queryArticles(apiKey, "Davis CA");
      let articlesD = await formatArticles(resultD["docs"]);
      const resultS = await queryArticles(apiKey, "Sacramento CA");
      let articlesS = await formatArticles(resultS["docs"]);
      articles = articlesS.concat(articlesD)
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
    {#if articles}
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
  {/if}
  </div>
</main>
