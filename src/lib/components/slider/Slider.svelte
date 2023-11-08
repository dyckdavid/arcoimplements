<script lang="ts">
	import embla from './index';
	import type { EmblaCarouselType } from 'embla-carousel';
	import { writable } from 'svelte/store';
  import { IconChevronCompactRight } from '@tabler/icons-svelte';
  import { IconChevronCompactLeft } from '@tabler/icons-svelte';

	const images = Array.from({ length: 3 }, (_, index) => `/slide-${(index % 4) + 1}.jpg`);
	const carousel = writable<EmblaCarouselType>();

	const onLeft = () => $carousel?.canScrollPrev() && $carousel?.scrollPrev();
	const onRight = () => $carousel?.canScrollNext() && $carousel?.scrollNext();
	const select = (index: number) => () => $carousel?.scrollTo(index);

	$: selected = $carousel?.selectedScrollSnap() ?? 0;
	const onSelect = () => {
		selected = $carousel?.selectedScrollSnap();
	};
</script>


<div class="relative bg-embla-carousel p-4 overflow-hidden rounded-[.25rem]">
	<div class="overflow-hidden" use:embla={{ store: carousel }} on:e-select={onSelect}>
		<div class="grid grid-flow-col auto-cols-[100%] grid-rows-[320px] gap-x-[10px]">
			{#each images as src, index}
				<div class="relative overflow-hidden rounded-[.25rem]">
					<img class="w-full h-full object-cover" {src} alt="" />
				</div>
			{/each}
		</div>
	</div>

	<button
		class="absolute top-1/2 left-4 disabled:opacity-30 disabled:cursor-not-allowed"
		disabled={selected === 0}
		on:click={onLeft}
	>
		<IconChevronCompactLeft />
	</button>
	<button
		class="absolute top-1/2 right-4 disabled:opacity-30 disabled:cursor-not-allowed"
		disabled={selected === images.length - 1}
		on:click={onRight}
	>
  <IconChevronCompactRight />
	</button>

	<div class="absolute bottom-4 left-0 w-full flex justify-center gap-4">
		{#each images as _, index}
			<button class="w-[30px] h-[30px] grid place-items-center" on:click={select(index)}>
				<div
					class="w-full h-[3px] bg-black rounded-[.25rem]"
					class:[background:linear-gradient(45deg,#ff9500,#ffcc00)]={selected === index}
				/>
			</button>
		{/each}
	</div>
</div>

<style>
  /* Ensure your icon scales as needed and is aligned properly */
  :global(svg.tabler-icon) {
    width: 2.5rem;
    height: 2.5rem;
    align-items: center;
  }
</style>