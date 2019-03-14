<template>
  <div class="container">
    <div class="rating">
      <div class="stars">
        <span class="iconfont icon-star"
            v-for="i in Math.round(restaurant.grade)"
            :key="i">&#xe6b0;</span>
        </div>
      <div class="amount">{{ restaurant.review_amount }}条点评</div>
    </div>
    <div class="button" @click="addReview">去点评</div>
  </div>
</template>

<script type="text/ecmascript-6">
import * as types from 'store/mutation-types'

export default {
  name: 'BottomBar',
  props: {
    restaurant: Object
  },
  methods: {
    addReview () {
      this.$store.commit(types.SET_ASSOSIATE_RESTAURANT, this.restaurant)
      this.$router.push('/add-review')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'

.container
  position: fixed
  bottom: 0
  width: 100%
  height: 60px
  box-shadow: 0 0 5px $color-shadow
  background: #fff
  border-top: 1px solid $border-shadow
  display: flex
  flex-direction: row
  align-items: center
  box-sizing: border-box
  padding: 0 7.5vw
  .rating
    flex: 1
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 30px
    .stars
      display: flex
      .icon-star
        color: $color-theme
        font-size: $font-size-medium
    .amount
      font-size: $font-size-small
      color: #999
  .button
    display: flex
    align-items: center
    justify-content: center
    background: $color-theme
    font-size: $font-size-medium
    color: #ffffff
    height: 35px
    width: 80px
    border-radius: 3px
</style>
