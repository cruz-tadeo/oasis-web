<template>
  <div>
   <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Grand Oasis Cancún"
        text="Cancún"
        :img-src="restaurante1"
      ></b-carousel-slide>
       <b-carousel-slide
        caption="Grand Oasis Cancún"
        text="Cancún"
        :img-src="restaurante2"
      ></b-carousel-slide>
       <b-carousel-slide
        caption="Grand Oasis Cancún"
        text="Cancún"
        :img-src="restaurante3"
      ></b-carousel-slide>
        <b-carousel-slide
        caption="Grand Oasis Cancún"
        text="Cancún"
        :img-src="piscina"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import restaurante1 from '@/assets/restaurante1.jpg'
import restaurante2 from '@/assets/restaurante2.jpg'
import restaurante3 from '@/assets/restaurante3.jpg'
import piscina from '@/assets/piscina.jpg'
export default {
  props: {
    items: [],
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      restaurante1,
      restaurante2,
      restaurante3,
      piscina
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
  computed: {
    hoteles() {
      let hoteles = [];
      if (this.items) {
        hoteles = this.items;
      }
      return hoteles;
    },
  },
};
</script>
