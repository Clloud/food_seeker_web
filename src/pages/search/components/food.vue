<template>
  <block title="美食"
  button="查看更多美食"
  v-if="foods.length"
  @more="$emit('more')"
  :showMore="showMore">
    <div class="foods">
      <div class="food"
        v-for="food in foods"
        :key="food.id"
        @click="toRestaurant(food.restaurant.id)">
        <div class="left-part">
          <div class="image-container">
            <img :src="imageUrl(food.images)" class="image" />
          </div>
        </div>
        <div class="right-part">
          <div class="title">{{ food.name }}</div>
          <div class="price">￥{{ food.price }}</div>
        </div>
      </div>
    </div>
  </block>
</template>

<script type="text/ecmascript-6">
import Block from './block'
import { mapState } from 'vuex'

export default {
  name: 'FoodBlock',
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
    ...mapState(['foods'])
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
  },
  mounted () {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'
@import '~common/style/mixin'

.foods
  display: flex
  flex-direction: column
  .food
    display: flex
    margin-bottom: 24px
    .left-part
      margin-right: 18px
      .image-container
        display: flex
        align-items: center
        height: 96px
        width: 96px
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
      .price
        font-family: 'PingFang SC'
        font-size: $font-size-medium-x
        font-weight: bold
</style>
