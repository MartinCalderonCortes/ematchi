<script lang="ts">
	import Grid from './Grid.svelte';
	import type { Level } from './levels';
	import { levels } from './levels';
	import { shuffle } from './utils';
	import EmojisFound from './EmojisFound.svelte';
	import Countdown from './Countdown.svelte';
	import { onMount } from 'svelte';

	const level = levels[0];
	let size: number = level.size;
	let grid: string[] = createGrid(level);
	let emojisFound: string[] = [];
	let remaining: number = level.duration;
	let playing: boolean = false;

	function createGrid(level: Level) {
		const copy = [...level.emojis];
		const pairs: string[] = [];

		for (let i = 0; i < size ** 2 / 2; i++) {
			const index = Math.floor(Math.random() * copy.length);
			const emoji = copy[index];

			copy.splice(index, 1);
			pairs.push(emoji);
		}

		pairs.push(...pairs);

		return shuffle(pairs);
	}

	function countdown() {
		const start = Date.now();
		let remainingAtStart = remaining;

		function loop() {
			if (playing) return;

			requestAnimationFrame(loop);
			remaining = remainingAtStart - (Date.now() - start);

			if (remaining <= 0) {
				//TODO the game has been lost
				playing = false;
			}
		}

		loop();
	}

	onMount(countdown);
</script>

<div class="game">
	<header class="header">
		<Countdown
			{remaining}
			duration={level.duration}
			on:click={() => {
				playing = !playing;
				countdown();
			}}
		/>
	</header>
	<section class="grid-container">
		<Grid
			{grid}
			on:found={(e) => {
				emojisFound = [...emojisFound, e.detail.emoji];
				if (emojisFound.length === size ** 2 / 2) {
					//TODO pause the game
					playing = false;
					countdown();
				}
			}}
			{emojisFound}
		/>
	</section>
	<footer class="footer">
		<EmojisFound {emojisFound} />
	</footer>
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

	.header,
	.footer {
		width: 80em;
		height: 10em;
	}

	.grid-container {
		width: 80em;
		height: 80em;
	}
</style>
