<script lang="ts">
	import { getTwemojiURL } from './utils';

	export let emoji: string;
	export let selected: boolean;
	export let isEmojiFound: boolean;
</script>

<div class="square" class:flipped={selected}>
	<button on:click />

	{#if !isEmojiFound}
		<img alt={emoji} src={getTwemojiURL(emoji)} />
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

	img {
		height: 10em;
		width: 10em;
		pointer-events: none;
	}
</style>
