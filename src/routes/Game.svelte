<script>
	import Grid from "./Grid.svelte";

</script>

<div class="game">
    <header class="info">Header</header>
    <section class="grid-container">
        <Grid/>
    </section>
    <footer class="info">Bottom</footer>
</div>

<style>
    .game {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: min(1vmin, 0.3rem);
    }

    .info {
        width: 80em;
        height: 10em;
        background-color: blueviolet;
    }

    .grid-container {
        width: 80em;
        height: 80em;
        background-color: cadetblue;
    }
</style>