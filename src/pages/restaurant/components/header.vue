<template>
  <div class="container">
    <div class="nav-abs" v-if="showAbs">
      <span class="iconfont icon-back" @click="back">&#xe612;</span>
    </div>
    <div class="nav-fixed" v-if="!showAbs">
      <span class="iconfont icon-back" @click="back">&#xe612;</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'RestaurantHeader',
  data () {
    return {
      showAbs: true
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 120) {
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'
@import '~common/style/mixin'

.container
  display: flex
  .nav-abs
    display: flex
    align-items: center
    justify-content: space-between
    width: 100%
    height: 60px
    box-sizing: border-box
    padding: 0 7.5vw
    position: fixed
    z-index: 99
    .icon-back
      font-size: 20px
      font-weight: bold
      color: #fff
      extend-click()
  .nav-fixed
    display: flex
    align-items: center
    justify-content: space-between
    width: 100%
    height: 60px
    box-sizing: border-box
    padding: 0 7.5vw
    position: fixed
    top: 0
    left: 0
    right: 0
    background: #fff
    .icon-back
      font-size: 20px
      font-weight: bold
      extend-click()
    .title
      font-size: $font-size-large-x
      margin-left: 36px
</style>
