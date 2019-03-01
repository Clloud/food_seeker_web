<template>
  <div class="intro">
    <div class="title">{{ title }}</div>
    <slot></slot>
    <div class="button" @click="onClick">{{ button }}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Item',
  props: {
    title: String,
    button: String
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'
@import '~common/style/mixin'

.intro
  display: flex
  flex-direction: column
  width: 85%
  padding: 24px 0
  border-top: 1.5px solid $color-border
  .title
    font-size: $font-size-large-x
    font-weight: bold
    margin-bottom: 16px
  .button
    margin-top: 12px
    color: $color-theme
</style>
