<script lang="ts" context="module">
  // If MediaItem is used outside this component, otherwise, move it inside the other <script> tag without export
    export interface MediaItem {
  src: string;
  type: 'image' | 'video';
  title: string;
}
  
</script>

<script lang="ts">
  import emblaCarouselSvelte, { type EmblaCarouselSvelteType } from "embla-carousel-svelte";
  import type { EmblaCarouselType } from "embla-carousel";
  import { IconChevronLeft, IconChevronRight } from "@tabler/icons-svelte";

  export let images: MediaItem[] = [];

  console.log(images);


  let emblaApi: EmblaCarouselType;
  let canScrollNext = true;
  let canScrollPrev = true;

  const checkScroll = () => {
    canScrollNext = emblaApi.canScrollNext();
    canScrollPrev = emblaApi.canScrollPrev();
  };

  const onInit = (event: CustomEvent<EmblaCarouselSvelteType>) => {
    emblaApi = event.detail as EmblaCarouselType;
    emblaApi.on("select", checkScroll);
    checkScroll();
  };

  const scrollNext = () => emblaApi.scrollNext();
  const scrollPrev = () => emblaApi.scrollPrev();
</script>

<div class="relative h-full">
  <div class="embla" use:emblaCarouselSvelte on:emblaInit={onInit}>
    <div class="embla__container">
      {#each images as {type, src, title,}}
        <div class="embla__slide">
          {#if type === 'image'}
            <img {src} alt={title} class="w-full h-full object-cover" />
          {:else if type === 'video'}
          <!-- svelte-ignore missing-declaration -->
          <!-- svelte-ignore a11y-media-has-caption -->
          <video {src} class="w-full h-full object-cover" controls aria-label={title}>
            <!-- Example track element, replace with your own subtitle track if available -->
            <!-- <track kind="captions" src="path/to/captions.vtt" srclang="en" label="English"> -->
            <!-- No captions available -->
          </video>          {/if}
        </div>
      {/each}
    </div>
  </div>
  <div class="absolute inset-0 flex justify-between items-center text-white pointer-events-none">
    <button
      class="transition-transform active:scale-75 disabled:invisible pointer-events-auto"
      on:click={scrollPrev}
      disabled={!canScrollPrev}
    >
      <IconChevronLeft class="mix-blend-difference"/>
    </button>
    <button
      class="transition-transform active:scale-75 disabled:invisible pointer-events-auto"
      on:click={scrollNext}
      disabled={!canScrollNext}
    >
      <IconChevronRight class="mix-blend-difference"/>
    </button>
  </div>
</div>

<style>
  .embla {
    overflow: hidden;
    height: 100%;
  }
  .embla__container {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
</style>
