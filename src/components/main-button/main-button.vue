<template>
  <div class="main-button">
    {{ text }}
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    text: {
      type: String,
      default: '确定'
    }
  },
  name: 'MainButton'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable.styl'

.main-button
  background: $color-theme
  color: #fff
  font-size: $font-size-medium
  display: flex
  justify-content: center
  align-items: center
</style>
