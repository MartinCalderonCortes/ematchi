<script lang="ts">
	export let emoji: string;
	export let selected: boolean;
	export let isEmojiFound: boolean;
</script>

<div class="square" class:flipped={selected}>
	<button on:click />

	{#if !isEmojiFound}
		<span>{emoji}</span>
	{/if}
</div>

<style>
	.square {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	button {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	span {
		font-size: 7em;
		pointer-events: none;
	}
</style>
