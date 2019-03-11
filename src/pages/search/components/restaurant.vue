<template>
  <block title="食堂窗口"
    button="查看更多窗口"
    v-if="restaurants.length"
    @more="$emit('more')"
    :showMore="showMore">
    <div class="restaurants">
      <div class="restaurant"
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        @click="toRestaurant(restaurant.id)">
        <div class="left-part">
          <div class="image-container">
            <img :src="imageUrl(restaurant.images)" class="image" />
          </div>
        </div>
        <div class="right-part">
          <div class="title">{{ restaurant.name }}</div>
          <div class="rating">
            <span class="stars" v-if="restaurant.review_amount">
              <span class="iconfont icon-star"
                v-for="i in rating(restaurant.grade)"
                :key="i">&#xe6b0;</span>
            </span>
            <span class="amount" v-if="restaurant.review_amount">
              {{ restaurant.review_amount }}
            </span>
            <span v-else class="amount">暂无评分</span>
          </div>
        </div>
      </div>
    </div>
  </block>
</template>

<script type="text/ecmascript-6">
import Block from './block'
import { mapState } from 'vuex'

export default {
  name: 'RestaurantBlock',
  components: {
    Block
  },
  props: {
    showMore: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapState(['restaurants'])
  },
  methods: {
    rating (grade) {
      return Math.round(grade)
    },
    imageUrl (images) {
      return images.length ? images[0].url : ''
    },
    toRestaurant (id) {
      this.$router.push('/restaurant/' + id)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'
@import '~common/style/mixin'

.restaurants
  display: flex
  flex-direction: column
  .restaurant
    display: flex
    margin-bottom: 24px
    .left-part
      margin-right: 18px
      .image-container
        display: flex
        align-items: center
        height: 96px
        width: 144px
        background: $color-image-background
        border-radius: 3.5px
        overflow: hidden
        .image
          width: 100%
    .right-part
      display: flex
      flex-direction: column
      justify-content: space-between
      padding: 0 0 3px
      .title
        font-size: $font-size-large
        line-height: 24px
        ellipsis(2)
      .rating
        display: flex
        align-items: center
        .stars
          display: flex
          margin-right: 6px
          .icon-star
            color: $color-theme
        .amount
          font-family: 'PingFang SC'
          font-size: $font-size-medium
          font-weight: bold
</style>
