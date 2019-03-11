<template>
  <div class="container">
    <my-header :title="title" :description="description" class="header">
    </my-header>
    <router-link to="/login" class="button" tag="div">
      <div class="iconfont mail">&#xe769;</div>
      <div class="text">使用邮箱登录</div>
    </router-link>
    <div class="register-container">
      <router-link tag="span" to="/register" class="register">注册</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MyHeader from 'components/header/header'

export default {
  name: 'LogOut',
  components: {
    MyHeader
  },
  data () {
    return {
      title: '我的',
      description: '登录开饭，体验更多功能'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'
@import '~common/style/mixin'

.container
  display: flex
  flex-direction: column
  width: 85%
  .button
    background: $color-theme
    color: #fff
    font-size: $font-size-medium-x
    height: 45px
    width: 100%
    max-width: 318.75px
    border-radius: 3.5px
    display: flex
    justify-content: center
    align-items: center
    margin: 8px 0
    position: relative
    .mail
      font-size: $font-size-large-xxx
      position: absolute
      left: 16px
  .register-container
    width: 85%
    max-width: 318.75px
    .register
      font-size: $font-size-medium-x
      color: $color-theme
      extend-click()
</style>
