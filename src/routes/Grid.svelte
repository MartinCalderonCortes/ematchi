<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Square from './Square.svelte';

	const dispatch = createEventDispatcher();

	export let grid: string[];
	export let emojisFound: string[];

	let cellA = -1;
	let cellB = -1;
	let resetSelectedCells: number;
</script>

<div class="grid">
	{#each grid as emoji, index}
		<Square
			{emoji}
			selected={cellA === index || cellB === index}
			on:click={() => {
				clearInterval(resetSelectedCells);
				if (cellA === -1 && cellB === -1) {
					cellA = index;
				} else if (cellB === -1) {
					cellB = index;
					if (grid[cellA] === grid[cellB]) {
						//match
						dispatch('found', {
							emoji
						});
					} else {
						//not mathc
						resetSelectedCells = setInterval(() => {
							cellA = cellB = -1;
						}, 300);
					}
				} else {
					cellA = index;
					cellB = -1;
				}
			}}
			isEmojiFound={emojisFound.includes(emoji)}
			group={grid.indexOf(emoji) === index ? 'a' : 'b'}
		/>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		height: 100%;
		grid-gap: 2px;
		perspective: 100vw;
	}
</style>
