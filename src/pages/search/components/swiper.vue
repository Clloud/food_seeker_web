<template>
  <div class="wrapper" v-if="show">
    <swiper :options="swiperOption">
      <swiper-slide v-for="image of images" :key="image.id">
        <img class="swiper-img" :src="image.url" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'

export default {
  name: 'HomeSwiper',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 4000
      }
    }
  },
  computed: {
    ...mapState({
      images: 'banners'
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  width: 100vw
  height: 115vw
  background: #eee
  .swiper-img
    width: 100vw
.swiper-pagination
  z-index: 99
</style>
