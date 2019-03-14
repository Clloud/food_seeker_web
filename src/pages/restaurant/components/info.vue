<template>
  <div class="title">{{ name }}</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'RestaurantInfo',
  props: {
    name: String
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'

.title
  font-size: $font-size-large-xxx
  font-weight: bold
  margin: 24px 0
  width: 85%
  max-wdith: 318.75px
</style>
