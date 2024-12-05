<template>
  <div class="carousel">
    <div class="carousel-inner" :style="carouselStyle">
      <div class="carousel-item" v-for="(image, index) in images" :key="index"
        :class="{ active: index === currentIndex }">
        <img :src="getImageSrc(image)" alt="Carousel Image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ImageCarousel',
  data() {
    return {
      currentIndex: 0,
      images: [
        'image1.webp',
        'image2.webp',
        'image3.webp',
        'image4.webp',
        'image5.webp'
      ]
    };
  },
  computed: {
    carouselStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
        transition: 'transform 0.8s ease',
      };
    },
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    autoSlide() {
      setInterval(() => {
        this.next();
      }, 5000);
    },
    getImageSrc(image: string): string {
      return new URL(`/src/assets/images/${image}`, import.meta.url).href;
    },
  },
  mounted() {
    this.autoSlide();
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.carousel-inner {
  display: flex;
  width: 100%;
}

.carousel-item {
  min-width: 100%;
  transition: transform 0.5s ease;
}

.carousel-item img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
</style>