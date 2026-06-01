<script lang="ts">
	import Grid from './Grid.svelte';
	import type { Level } from './levels';
	import { shuffle } from './utils';
	import EmojisFound from './EmojisFound.svelte';
	import Countdown from './Countdown.svelte';
	import { createEventDispatcher, onMount } from 'svelte';

	let size: number = 0;
	let grid: string[] = [];
	let emojisFound: string[] = [];
	let remaining: number = 0;
	let duration: number = 0;
	let playing: boolean = false;

	const dispatch = createEventDispatcher();

	export function start(level: Level) {
		emojisFound = [];
		size = level.size;
		grid = createGrid(level);
		remaining = duration = level.duration;

		resume();
	}

	export function resume() {
		playing = true;
		countdown();
		dispatch('play');
	}

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
			if (!playing) return;

			requestAnimationFrame(loop);
			remaining = remainingAtStart - (Date.now() - start);

			if (remaining <= 0) {
				//TODO the game has been lost
				playing = false;
				dispatch('lose');
			}
		}

		loop();
	}
</script>

<div class="game" style="--size: {size}">
	{#if playing}
		<header class="header">
			<Countdown
				{remaining}
				{duration}
				on:click={() => {
					playing = !playing;
					dispatch('pause');
				}}
			/>
		</header>
	{/if}

	<section class="grid-container">
		{#key grid}
			<Grid
				{grid}
				on:found={(e) => {
					emojisFound = [...emojisFound, e.detail.emoji];
					if (emojisFound.length === size ** 2 / 2) {
						playing = false;
						countdown();
						dispatch('won');
					}
				}}
				{emojisFound}
			/>
		{/key}
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
