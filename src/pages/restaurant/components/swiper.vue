<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="image of images" :key="image.id">
        <img class="swiper-img" :src="image.url" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'RestaurantSwiper',
  props: {
    images: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.images.length
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  width: 100vw
  height: 66.7vw
  background: #eee
  .swiper-img
    width: 100vw
.swiper-pagination
  z-index: 99
</style>
