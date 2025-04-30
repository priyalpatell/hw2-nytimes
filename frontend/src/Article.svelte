<script>
    export let headline;
    export let snippet;
    export let image = null;
    export let caption = null;
</script>

<article class="item">
    <h1>{headline}</h1>
    <p>
        {snippet}
    </p>
    {#if image}
    <img src={image} alt={caption}>
    {:else}
    {/if}
</article>