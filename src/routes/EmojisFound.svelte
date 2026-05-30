<script lang="ts">
	import { getTwemojiURL } from './utils';

	export let emojisFound: string[];
</script>

<div class="found">
	{#each emojisFound as emoji}
		<img src={getTwemojiURL(emoji)} alt={emoji} />
	{/each}
</div>

<style>
	.found {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 8px;
	}

	img {
		height: 10em;
		width: 10em;
		padding-top: 4px;
	}
</style>
