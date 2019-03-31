<template>
  <div class="container">
    <div class="item" @click="$router.push('/my/reviews')">
      <div class="iconfont icon icon-review">&#xe7bc;</div>
      <div class="text">我的点评</div>
    </div>
    <div class="item" @click="$router.push('/my/invitations')">
      <div class="iconfont icon icon-review">&#xebdf;</div>
      <div class="text">我的约饭</div>
    </div>
    <div class="item" @click="$router.push('/my/setting')">
      <div class="iconfont icon">&#xe634;</div>
      <div class="text">设置</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Items'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'

.container
  width: 85%
  display: flex
  flex-direction: column
  margin-top: 24px
  .item
    display: flex
    align-items: center
    padding: 24px 0
    border-bottom: 1px solid $color-border
    .icon
      color: $color-shadow-d
      font-size: $font-size-large-xx
      margin-right: 18px
    .icon-review
      margin-bottom: 6px
    .text
      font-size: $font-size-large
</style>
