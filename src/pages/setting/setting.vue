<template>
  <div class="page">
    <nav-bar title="设置"></nav-bar>
    <div class="item" @click="logout">退出登录</div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar'
import * as types from 'store/mutation-types'

export default {
  name: 'Setting',
  components: {
    NavBar
  },
  methods: {
    logout () {
      localStorage.token = ''
      this.$store.commit(types.SET_TOKEN, '')
      this.$store.commit(types.SET_UID, 0)
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'

.page
  display: flex
  flex-direction: column
  align-items: center
  .item
    padding: 24px 0
    width: 85%
    font-size: $font-size-large
    border-bottom: 1px solid $color-border
</style>
