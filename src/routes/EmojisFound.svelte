<script lang="ts">
	import { receive } from './transitions';
	import { getTwemojiURL } from './utils';

	export let emojisFound: string[];
</script>

<div class="found">
	{#each emojisFound as emoji}
		<div class="pair">
			<img in:receive={{ key: `${emoji}-a` }} src={getTwemojiURL(emoji)} alt={emoji} />
			<img in:receive={{ key: `${emoji}-b` }} src={getTwemojiURL(emoji)} alt={emoji} />
		</div>
	{/each}
</div>

<style>
	.found {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 8px;
		filter: drop-shadow(0.2em 0.2em 0.5em rgba(0 0 0 0.2));
	}

	.pair {
		height: 10em;
		width: 10em;
		background: white;
		padding: 1em;
		border-radius: 50%;
		margin-top: 4px;
	}

	img {
		position: absolute;
		height: 5em;
		width: 5em;
	}
</style>
