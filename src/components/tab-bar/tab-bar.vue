<template>
  <div class="tabs">
    <router-link
      v-for="(tab, index) in tabs"
      :key="index"
      :to="tab.to"
      class="tab"
      :activeClass="'active'">
      <span class="iconfont icon" v-html="tab.icon"></span>
      <div class="text">{{ tab.text }}</div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'TabBar',
  data () {
    return {
      tabs: [
        {
          to: '/search',
          icon: '&#xe615;',
          text: '搜索'
        },
        {
          to: '/my',
          icon: '&#xe62c;',
          text: '我的'
        },
        {
          to: '/register',
          icon: '&#xe62c;',
          text: '注册'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable.styl'

.tabs
  display: flex
  justify-content: space-around
  align-items: center
  width: 100%
  height: 60px
  position: fixed
  bottom: 0
  background: #ffffff
  box-shadow: 0 0 5px $color-shadow
  .tab
    display: flex
    flex-direction: column
    text-align: center
    .icon
      font-size: $font-size-large-xxx
    .text
      font-size: $font-size-small
      padding-top: 3px
  .active
    color: $color-alert
</style>
