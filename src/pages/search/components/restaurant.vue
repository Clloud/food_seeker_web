<template>
  <block title="食堂窗口" button="查看全部窗口">
    <div class="restaurants">
      <div class="restaurant">
        <div class="left-part">
          <div class="image"></div>
        </div>
        <div class="right-part">
          <div class="title">这是一家餐馆的名字</div>
          <div class="rating">
            <span class="stars">
              <span class="iconfont icon-star" v-for="i in 4" :key="i">&#xe6b0;</span>
            </span>
            <span class="amount">327</span>
          </div>
        </div>
      </div>
    </div>
  </block>
</template>

<script type="text/ecmascript-6">
import Block from './block'

export default {
  name: 'RestaurantBlock',
  components: {
    Block
  },
  data () {
    return {
      restaurants: []
    }
  },
  mounted () {
    this.restaurants = this.$store.state.restaurants
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
      .image
        height: 96px
        width: 144px
        background: #999
        border-radius: 3.5px
    .right-part
      display: flex
      flex-direction: column
      justify-content: space-between
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
