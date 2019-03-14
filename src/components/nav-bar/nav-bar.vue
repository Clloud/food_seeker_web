<template>
  <div class="container">
    <div class="nav">
      <div class="left-part">
        <span class="iconfont icon-back" @click="back">&#xe612;</span>
        <span class="title">{{ title }}</span>
      </div>
      <div class="right-part">
        <span class="button"
          @click="submit"
          :class="{'activated': buttonActivated}">
          {{ button }}
        </span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'NavBar',
  props: {
    title: String,
    button: String,
    buttonActivated: Boolean
  },
  methods: {
    back () {
      this.$router.back()
    },
    submit () {
      this.$emit('submit')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'
@import '~common/style/mixin'

.container
  height: 60px
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  background: #fff
  .nav
    display: flex
    align-items: center
    justify-content: space-between
    width: 85%
    .left-part
      display: flex
      align-items: center
      .icon-back
        font-size: 20px
        font-weight: bold
        extend-click()
      .title
        font-size: $font-size-large-x
        margin-left: 36px
    .right-part
      .button
        font-size: $font-size-large
        color: $color-theme-l
      .activated
        color: $color-theme
</style>
