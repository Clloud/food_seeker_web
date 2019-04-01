<template>
  <div class="container" @click="toRestaurant">
    <div class="left-part">
      <img
        class="image"
        :src="imageUrl(restaurant.images)"
        v-if="restaurant.images.length"/>
    </div>
    <div class="right-part">
      <div class="res-name">{{ restaurant.name }}</div>
      <div class="res-location">{{ restaurant.location }}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Restaurant',
  props: {
    restaurant: Object
  },
  methods: {
    imageUrl (images) {
      return images.length ? images[0].url : ''
    },
    toRestaurant () {
      this.$router.push(`/restaurant/${this.restaurant.id}`)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'

.container
  margin: 20px 0
  display: flex
  height: 80px
  width: 85%
  background: #fafafa
  padding: 15px
  box-sizing: border-box
  border-radius: 5px
  .left-part
    height: 50px
    width: 75px
    margin-right: 12px
    border-radius: 3px
    background: $color-image-background
    .image
      height: 50px
      width: 75px
      border-radius: 3px
  .right-part
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 50px
    box-sizing: border-box
    padding: 2px 0
    .res-name
      font-weight: bold
    .res-location
      font-size: 14px
      color: $color-text-l
</style>
