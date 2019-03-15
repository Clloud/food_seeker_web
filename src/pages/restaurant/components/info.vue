<template>
  <div class="container">
    <div class="location">
      <span>{{ restaurant.campus_name }}</span>
      <span>•</span>
      <span>{{ restaurant.canteen_name }}</span>
    </div>
    <div class="title">{{ restaurant.name }}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'RestaurantInfo',
  props: {
    restaurant: Object
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'

.container
  display: flex
  width: 100%
  margin: 24px 0
  .location
    width: 85%
    font-size: $font-size-medium
    color: #4a4121
    margin-bottom: 12px
  .title
    font-size: $font-size-large-xxx
    font-weight: bold
    width: 85%
</style>
