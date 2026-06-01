<script lang="ts">
	import Game from './Game.svelte';
	import '../styles.css';
	import Modal from './Modal.svelte';
	import { levels } from './levels';

	let state: 'waiting' | 'playing' | 'paused' | 'won' | 'lost' = 'waiting';
</script>

{#if state !== 'playing'}
	<Modal>
		<header>
			<h1><span>e</span>match<span>i</span></h1>
			<p>Welcom to the best match game</p>
		</header>

		{#if state === 'won' || state === 'lost'}
			<p>you {state} the game!!</p>
		{:else if state === 'paused'}
			<p>game paused</p>
		{:else if state === 'waiting'}
			<p>choose a level:</p>
		{/if}

		<div class="levels-buttons">
			{#if state === 'paused'}
				<button>resume</button>
				<button>quit</button>
			{:else}
				{#each levels as level}
					<button>{level.label}</button>
				{/each}
			{/if}
		</div>
	</Modal>
{/if}

<Game />

<style>
	h1 {
		font-size: 4em;
	}

	h1 span {
		color: purple;
	}

	p {
		font-family: Grandstander;
	}

	.levels-buttons {
		display: flex;
		place-content: center;
		gap: 8px;
	}
</style>
