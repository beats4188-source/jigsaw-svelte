<script>
	import { num_rows, gameStarted, gameEnded, timer } from './stores';
	import { ArrowRightIcon, ArrowLeftIcon } from 'svelte-feather-icons';
	export let jigsawSrc;
	let imgInput;
	// Your uploaded image URL
	const HARDCODED_IMAGE_URL = "https://github.com/beats4188-source/adsadsas/blob/main/WhatsApp%20Image%202025-08-19%20at%2019.56.01_e8996e94.jpg?raw=true"
	const options = ['Easy', 'Medium', 'Hard'];
	let selected = options[0];
	$num_rows = 5;
	function setLevel() {
		if (selected === 'Easy') {
			$num_rows = 5;
		} else if (selected === 'Medium') {
			$num_rows = 7;
		} else if (selected === 'Hard') {
			$num_rows = 10;
		} else if (selected === 'debug') {
			$num_rows = 2;
		}
	}
	function startGame() {
		if (jigsawSrc) {
			$gameEnded = false;
			$gameStarted = true;
			$timer = new Date();
		}
	}
	function useHardcodedImage() {
		jigsawSrc = HARDCODED_IMAGE_URL;
	}
	// Auto-load the hardcoded image when component mounts
	import { onMount } from 'svelte';
	onMount(() => {
		jigsawSrc = HARDCODED_IMAGE_URL;
	});
	let isNextPage = false;
	function movePage() {
		isNextPage = !isNextPage;
	}
</script>
<main
	class="mx-3 flex min-h-[30rem] w-[calc(100vw-8rem)] max-w-4xl gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-8 shadow-2xl backdrop-blur-sm border border-pink-200/50"
	style="box-shadow: 0 25px 60px rgba(251, 182, 206, 0.4), 0 0 100px rgba(252, 231, 243, 0.3);"
>
	<div
		class={`relative min-w-full pb-10 transition-all duration-700 ease-out xs:pb-0 ${
			isNextPage ? 'translate-x-[calc(-100%-10rem)] opacity-90' : 'translate-x-0 opacity-100'
		}`}
	>
		<form class="">
			<input
				type="file"
				id="img"
				name="img"
				class="hidden"
				accept="image/*"
				bind:this={imgInput}
				on:change={(e) => {
					// @ts-ignore
					let file = e.target.form[0].files[0];
					if (file) {
						jigsawSrc = URL.createObjectURL(file);
					}
				}}
			/>
		</form>
		
	<div class="mb-6 relative transform hover:scale-105 transition-all duration-500">
	<div class="bg-gradient-to-br from-pink-200/90 via-rose-200/90 to-pink-300/80 border-3 border-pink-400/80 p-8 shadow-xl backdrop-blur-md" style="border-radius: 0 0 25px 25px; border-width: 3px; box-shadow: 0 15px 35px rgba(251, 182, 206, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.7);">
		
		<div class="bg-gradient-to-br from-pink-50/95 via-rose-50/95 to-pink-100/90 border-2 border-pink-300/80 p-6 shadow-lg transform -rotate-1 backdrop-blur-sm" style="border-radius: 15px 20px 18px 22px; box-shadow: 0 8px 25px rgba(251, 182, 206, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.5);">
			
			<div class="absolute -top-2 left-4 text-pink-400 text-lg animate-float">🌸</div>
			<div class="absolute top-2 right-4 text-rose-400 text-sm animate-float delay-1000">✨</div>
			<div class="absolute bottom-3 right-2 text-pink-500 text-lg animate-float delay-500">🦋</div>
			<div class="absolute bottom-2 left-3 text-rose-400 text-sm animate-float delay-1500">💫</div>
			<div class="absolute top-1/3 left-1 text-pink-300 text-xs animate-float delay-700">🌟</div>
			<div class="absolute top-2/3 right-1 text-rose-300 text-xs animate-float delay-1200">🌺</div>
			
			<div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: repeating-linear-gradient(transparent, transparent 24px, #ec4899 24px, #ec4899 25px);"></div>
			
			<div class="relative z-10">
				<div class="text-right text-pink-600 text-sm mb-3 font-medium" style="font-family: 'Comic Sans MS', cursive;">with endless love 💕</div>
				<p class="text-pink-900 text-center leading-loose text-base font-medium" style="font-family: 'Comic Sans MS', cursive;">
				
					
					<span class="text-sm text-pink-800 font-medium">Hlke hlke sab tukde jud jaayenge 💞</span><br>
					<span class="text-sm text-pink-800 font-medium">Waise hi jaise do dil mil rahe hain ❤️</span><br>
					<span class="text-sm text-pink-800 font-medium">Pyaar ki nazuk hawa mein 🌸</span><br>
					
					<span class="text-sm text-pink-800 font-medium">Dhairya se khelna, kyunki ✨</span><br>
					<span class="text-sm text-pink-800 font-medium">Jaise hi khel poora hoga 🎉</span><br>
					<span class="text-sm text-pink-800 font-medium">Ek naya surprise khul jaayega 🎁💖
				</p>
				<div class="text-right text-rose-600 text-sm mt-3 font-medium" style="font-family: 'Comic Sans MS', cursive;">hugs & kisses 🤗</div>
			</div>
		</div>
		
		<div class="absolute top-3 left-5 text-pink-400 text-xl animate-pulse">💌</div>
		<div class="absolute top-4 right-5 text-rose-400 text-lg animate-pulse delay-500">🎀</div>
		<div class="absolute bottom-3 left-3 text-pink-400 text-base animate-pulse delay-1000">🌷</div>
	</div>
	
	<div class="absolute -top-0 left-0 right-0 bg-gradient-to-b from-pink-300/90 via-rose-300/90 to-pink-400/80 border-3 border-pink-400/80 shadow-xl" style="height: 50px; clip-path: polygon(0 0, 50% 100%, 100% 0); z-index: 10; border-width: 3px; box-shadow: 0 8px 25px rgba(251, 182, 206, 0.4);">
	</div>
	
	<div class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
		<div class="relative animate-pulse">
			<div class="text-rose-500 text-3xl drop-shadow-lg">💖</div>
			<div class="absolute -top-2 -left-2 text-pink-300 text-sm animate-ping">✨</div>
			<div class="absolute -top-2 -right-2 text-rose-300 text-sm animate-ping delay-700">💫</div>
			<div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-pink-400 text-xs animate-bounce delay-300">🌟</div>
		</div>
	</div>
</div>

		{#if jigsawSrc}
			<img src={jigsawSrc} alt="puzzle preview" class="mx-auto w-full max-w-xs hidden" />
		{/if}
		<button class="group absolute bottom-0 right-0 p-3 bg-gradient-to-r from-pink-200/80 to-rose-200/80 rounded-full shadow-xl backdrop-blur-sm border border-pink-300/50 hover:from-pink-300/80 hover:to-rose-300/80 transition-all duration-300 hover:scale-110 disabled:opacity-50" on:click={movePage} disabled={!jigsawSrc}>
			<ArrowRightIcon size="28" class="text-pink-500 group-hover:text-pink-600 transition-colors" />
		</button>
	</div>
	<div
		class={`relative min-w-full transition-all duration-700 ease-out ${
			isNextPage ? 'translate-x-[calc(-100%-2rem)] opacity-100' : 'translate-x-0 opacity-90'
		}`}
	>
		<div class="bg-gradient-to-br from-pink-100/95 via-rose-100/95 to-pink-200/90 rounded-3xl p-8 shadow-xl backdrop-blur-md border border-pink-300/70 relative overflow-hidden" style="box-shadow: 0 20px 40px rgba(251, 182, 206, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.6);">
			
			<div class="absolute inset-0 overflow-hidden pointer-events-none">
				<div class="absolute top-4 left-8 text-pink-300/40 text-lg animate-float-slow">🌸</div>
				<div class="absolute top-12 right-12 text-rose-300/40 text-sm animate-float-slow delay-1000">✨</div>
				<div class="absolute bottom-16 left-6 text-pink-300/40 text-base animate-float-slow delay-2000">🦋</div>
				<div class="absolute bottom-8 right-16 text-rose-300/40 text-sm animate-float-slow delay-1500">💫</div>
				<div class="absolute top-1/2 left-4 text-pink-200/50 text-xs animate-pulse-soft">🌟</div>
				<div class="absolute top-1/3 right-8 text-rose-200/50 text-xs animate-pulse-soft delay-700">🌺</div>
			</div>
			
			<div class="mb-6">
	<span
		class="text-pink-600 font-medium text-xl mb-4 block animate-fade-in"
		style="font-family: 'Comic Sans MS', cursive;"
		>Choose your magical difficulty 🌟</span
	>
	<select
		bind:value={selected}
		on:change={setLevel}
		class="w-full p-5 rounded-2xl bg-gradient-to-r from-pink-100/90 to-rose-100/90 border-2 border-pink-300/70 text-pink-700 font-medium cursor-pointer shadow-lg backdrop-blur-sm transition-all duration-500 hover:border-pink-400/80 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:border-rose-400/80 focus:ring-4 focus:ring-pink-200/60 focus:scale-[1.02]"
		style="font-family: 'Comic Sans MS', cursive;"
	>
		{#each options as option}
			<option value={option} class="bg-pink-100 text-pink-700 py-2">{option}</option>
		{/each}
	</select>
</div>
			
			
	<div
	class="bg-gradient-to-r from-pink-100/80 to-rose-100/80 rounded-2xl p-6 mb-8 shadow-inner border border-pink-200/60 backdrop-blur-sm relative overflow-hidden group hover:shadow-lg transition-all duration-500"
>
	<div
		class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
	></div>

	

    <div class="relative z-10">
        {#if selected === 'Easy'}
        <div class="text-center animate-bounce-gentle">
                ✨ Easy Breeze  ✨
                <br>
            Perfect for dreamy beginnings! 🌸💕
        </div>
        {:else if selected === 'Medium'}
        <div class="text-center animate-bounce-gentle">
             🌟 Sweet Adventure  🌟
            <br>
            Just right for magical moments! 🦋✨
        </div>
        {:else if selected === 'Hard'}
        <div class="text-center animate-bounce-gentle">
                💖 Queen Challenge  💖
            <br>
            For the queen of my heart! 👑💫
        </div>
        {:else if selected === 'debug'}
        <div class="text-center animate-bounce-gentle">
            <p class="text-slate-800 font-medium text-xl mb-2" style="font-family: 'Comic Sans MS', cursive;">
                🔧 Quick Magic ({$num_rows} × {$num_rows}) 🔧
            </p>
            <p class="text-pink-700 text-sm">Lightning fast fun! ⚡🌸</p>
        </div>
        {/if}
    </div>
</div>
			<button class="group relative w-full p-5 bg-gradient-to-r from-pink-300/90 via-rose-300/90 to-pink-400/90 rounded-2xl shadow-xl backdrop-blur-sm border border-pink-400/60 hover:from-pink-400/95 hover:via-rose-400/95 hover:to-pink-500/95 transition-all duration-500 hover:scale-105 hover:shadow-2xl transform active:scale-95 overflow-hidden" on:click={startGame} style="font-family: 'Comic Sans MS', cursive;">
				
				<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
				
				<div class="absolute top-2 left-4 text-white/60 text-sm animate-twinkle">✨</div>
				<div class="absolute bottom-2 right-4 text-white/60 text-sm animate-twinkle delay-500">🌟</div>
				<div class="absolute top-3 right-8 text-white/40 text-xs animate-twinkle delay-1000">💫</div>
				
				<span class="relative z-10 text-white font-bold text-xl drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300">Let's Go! 🚀💖</span>
			</button>
		</div>
		
		<button class="group absolute bottom-0 left-0 p-3 bg-gradient-to-r from-rose-300/80 to-pink-300/80 rounded-full shadow-xl backdrop-blur-sm border border-pink-400/50 hover:from-rose-400/80 hover:to-pink-400/80 transition-all duration-300 hover:scale-110" on:click={movePage}>
			<ArrowLeftIcon size="28" class="text-pink-600 group-hover:text-pink-700 transition-colors" />
		</button>
	</div>
</main>

<style>
	/* All animations remain the same */
	@keyframes float {
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		50% { transform: translateY(-10px) rotate(5deg); }
	}
	
	@keyframes float-slow {
		0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
		50% { transform: translateY(-8px) rotate(3deg) scale(1.05); }
	}
	
	@keyframes bounce-gentle {
		0%, 100% { transform: translateY(0px); }
		50% { transform: translateY(-2px); }
	}
	
	@keyframes pulse-soft {
		0%, 100% { opacity: 0.4; transform: scale(1); }
		50% { opacity: 0.8; transform: scale(1.1); }
	}
	
	@keyframes twinkle {
		0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
		25% { opacity: 0.8; transform: scale(1.2) rotate(90deg); }
		50% { opacity: 1; transform: scale(0.8) rotate(180deg); }
		75% { opacity: 0.6; transform: scale(1.1) rotate(270deg); }
	}
	
	@keyframes fade-in {
		from { opacity: 0; transform: translateY(-10px); }
		to { opacity: 1; transform: translateY(0); }
	}
	
	.animate-float {
		animation: float 3s ease-in-out infinite;
	}
	
	.animate-float-slow {
		animation: float-slow 4s ease-in-out infinite;
	}
	
	.animate-bounce-gentle {
		animation: bounce-gentle 2s ease-in-out infinite;
	}
	
	.animate-pulse-soft {
		animation: pulse-soft 3s ease-in-out infinite;
	}
	
	.animate-twinkle {
		animation: twinkle 2s ease-in-out infinite;
	}
	
	.animate-fade-in {
		animation: fade-in 0.8s ease-out forwards;
	}
	
	.border-3 {
		border-width: 3px;
	}
	
	/* Removed the unneeded custom ultra-light pink tones */
</style>