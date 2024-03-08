<script lang="ts">
  import emblaCarouselSvelte, {
    type EmblaCarouselSvelteType,
  } from "embla-carousel-svelte";
  import type { EmblaCarouselType } from "embla-carousel";
  import { IconChevronLeft, IconChevronRight } from "@tabler/icons-svelte";
  export let images: string[] = [];
  export let alt = "";

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

    return {
      destroy: emblaApi.destroy,
    };
  };

  const scrollNext = () => emblaApi.scrollNext();
  const scrollPrev = () => emblaApi.scrollPrev();
</script>

<div class="relative h-full">
  <div class="embla" use:emblaCarouselSvelte on:emblaInit={onInit}>
    <div class="embla__container">
      {#each images as src}
        <div class="embla__slide">
          <img {src} {alt} class="w-full h-full object-cover" />
        </div>
      {/each}
    </div>
  </div>
  <div
    class="absolute inset-0 flex justify-between items-center text-white pointer-events-none"
  >
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
