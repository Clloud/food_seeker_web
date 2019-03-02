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
    // overflow: hidden
    width: 100%
    // height: 0
    // padding-bottom: 66.7%
    // padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
  .swiper-pagination
    z-index: 99
</style>
