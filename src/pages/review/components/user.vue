<template>
  <div class="container">
    <div class="left-part">
      <div class="image-wrapper">
        <img class="avatar"
        :src="user.avatar_url"
        v-if="user.avatar_url"/>
      </div>
    </div>
    <div class="right-part">
      <div class="nickname">{{ user.nickname }}</div>
      <div class="time" v-time="time"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'User',
  props: {
    user: Object,
    time: Number
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'

.container
  width: 85%
  display: flex
  margin-bottom: 36px
  .left-part
    .image-wrapper
      width: 45px
      height: 45px
      border-radius: 45px
      background: $color-image-background
      overflow: hidden
      .avatar
        width: 45px
        height: 45px
        border-radius: 45px
        background: #eeeeee
  .right-part
    margin: 2px 0  0 12px
    display: flex
    flex-direction: column
    .nickname
      font-weight: bold
      margin-bottom: 8px
    .time
      font-size: $font-size-small
      font-family: 'PingFang SC'
</style>
