<template>
  <div class="main-button" @click="onClick">
    <slot>确定</slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'MainButton',
  methods: {
    onClick () {
      this.$emit('confirm')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable.styl'

.main-button
  background: $color-theme
  color: #fff
  font-size: $font-size-medium-x
  height: 50px
  width: 85%
  max-width: 318.75px
  border-radius: 3.5px
  display: flex
  justify-content: center
  align-items: center
</style>
