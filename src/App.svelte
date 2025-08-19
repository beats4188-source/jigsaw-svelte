<script>
	//@ts-nocheck
	import Jigsaw from './lib/Jigsaw.svelte';
	import Modal from './lib/Modal.svelte';
	import OverlayMenu from './lib/OverlayMenu.svelte';
	import { gameEnded, gameStarted, timer } from './lib/stores.js';
	import { getReadableTime } from './utils';
	import MainMenu from './lib/MainMenu.svelte';
	import PuzzleBgToggle from './lib/PuzzleBgToggle.svelte';

	let jigsawSrc = '';
	let JigsawImg;

	function resetGame() {
		$gameStarted = false;
		$gameEnded = false;
		jigsawSrc = '';
	}
</script>

{#if !$gameStarted}
	<div class="grid min-h-screen place-content-center">
		<MainMenu bind:jigsawSrc />
	</div>
{/if}

<!-- an image for the jigsaw canvas -->
<img src={jigsawSrc} bind:this={JigsawImg} class="hidden" alt="" aria-hidden="true" width="0" />

{#if $gameStarted}
	<Jigsaw img={JigsawImg} />

	<OverlayMenu>
		<img src={jigsawSrc} alt="solved jigsaw" class="max-h-[75vh] w-full xs:max-w-md" />
		<PuzzleBgToggle />
		<button on:click={resetGame} class="btn btn-base btn-filled-primary mt-4 w-full">
			New Game
		</button>
	</OverlayMenu>
{/if}

{#if $gameEnded}
<Modal on:close={() => ($gameEnded = false)}>
	<div style="background: linear-gradient(135deg, #ffeef8, #ffe4ec); border-radius: 20px; padding: 2rem; text-align: center; border: 2px solid rgba(255, 182, 203, 0.4); max-width: 400px; margin: 0 auto;">
		
		<!-- Success Message -->
		<p style="font-size: 1.5rem; color: #d63384; font-weight: 700; margin-bottom: 0.5rem;">🎉 Puzzle solved! 🎉</p>
		<p style="font-size: 1rem; font-weight: 600; color: #c2185b; background: rgba(255, 255, 255, 0.7); padding: 0.5rem 1rem; border-radius: 15px; display: inline-block; margin-bottom: 2rem;">
			Your time: {getReadableTime(new Date() - $timer)}
		</p>

		<!-- Romantic Message Box -->
		<div style="background: linear-gradient(145deg, #fff0f6, #fce4ec); border-radius: 20px; padding: 2rem 1.5rem; margin: 2rem 0; border: 2px solid rgba(255, 182, 203, 0.5); position: relative;">
			<div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); font-size: 2rem; background: #ffeef8; padding: 0.3rem 0.6rem; border-radius: 50%; border: 2px solid rgba(255, 182, 203, 0.5);">💕</div>
			<p style="color: #880e4f; font-size: 1rem; font-family: Georgia, serif; font-style: italic; line-height: 1.6; margin: 1rem 0;">
				"Every puzzle we solve together brings us closer. You make every moment magical, my love! ✨💖"
			</p>
			<div style="color: #ad1457; font-size: 0.9rem; font-weight: 600; margin-top: 1rem;">- With all my love 💌</div>
		</div>

		<!-- New Game Button -->
		<button on:click={resetGame} style="background: linear-gradient(135deg, #ff6b9d, #ff8fab); color: white; border: none; padding: 1rem 2rem; border-radius: 15px; font-size: 1rem; font-weight: 600; cursor: pointer; width: 100%; margin-top: 1rem;">
			🎮 New Game
		</button>
	</div>
</Modal>
{/if}
