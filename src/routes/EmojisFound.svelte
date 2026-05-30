<script lang="ts">
	export let emojisFound: string[];
</script>

<div class="found">
	{#each emojisFound as emoji}
		<span>{emoji}</span>
	{/each}
</div>

<style>
	.found {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 8px;
		font-size: 6em;
	}

	span {
		padding-top: 4px;
	}
</style>
