<script lang="ts">
  import { onMount } from 'svelte';
  import { articles } from './content.ts' // imports static content
  import Article from './Article.svelte'

  let apiKey: string = '';

  // Turn article data into an array and display dynamically

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
      <!-- filters sectioned articles -->
      {#each articles.filter(a => a.section === 'main') as article}
        <Article data={article} />
      {/each}
    </section>

  <hr>
  
  <section class="left">
    <!-- filters sectioned articles -->
    {#each articles.filter(a => a.section === 'left') as article}
        <Article data={article} />
      {/each}

  </section>
  
  <section class="right">
    <!-- filters sectioned articles -->
    {#each articles.filter(a => a.section === 'right') as article}
        <Article data={article} />
      {/each}

    </section>
  </div>

  <p>
    Your API Key: <strong>{apiKey}</strong>
  </p>

</main>
