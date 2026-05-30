<script lang="ts">
	import { getTwemojiURL } from './utils';

	export let emoji: string;
	export let selected: boolean;
	export let isEmojiFound: boolean;
</script>

<div class="square" class:flipped={selected || isEmojiFound}>
	<div class="background" />

	<button on:click />

	{#if !isEmojiFound}
		<img alt={emoji} src={getTwemojiURL(emoji)} />
	{/if}
</div>

<style>
	.square {
		display: flex;
		justify-content: center;
		align-items: center;
		transform-style: preserve-3d;
		transition: transform 0.4s;
	}

	.flipped {
		transform: rotateY(180deg);
	}

	.background {
		position: absolute;
		background: white;
		width: 100%;
		height: 100%;
		transform: rotateY(180deg);
		backface-visibility: hidden;
		border: 0.5em solid #eee;
		border-radius: 1em;
	}

	button {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		background: #eee;
		border: 0;
		border-radius: 1em;
		font-size: inherit;
	}

	img {
		height: 10em;
		width: 10em;
		pointer-events: none;
		transform: rotateY(180deg);
		backface-visibility: hidden;
	}
</style>
