<script lang="ts">
    export let emoji: string

</script>

<div class="square">{emoji}</div>

<style>
    .square {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: darkgreen;
        font-size: 2rem;
    }
</style>