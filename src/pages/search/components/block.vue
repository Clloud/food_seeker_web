<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="button" @click="onClick" v-show="showMore">{{ button }}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Block',
  props: {
    title: String,
    button: {
      type: String,
      default: '查看全部'
    },
    showMore: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick () {
      this.$emit('more')
      this.show = false
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'

.container
  display: flex
  flex-direction: column
  width: 85%
  margin: 24px 0
  .title
    font-size: $font-size-large-xxx
    font-weight: bold
  .content
    margin-top: 24px
  .button
    width: 100%
    height: 48px
    border: 1.5px solid #79c4c4
    border-radius: 5px
    display: flex
    justify-content: center
    align-items: center
    font-size: $font-size-medium-x
    font-weight: bold
    color: $color-theme
</style>
