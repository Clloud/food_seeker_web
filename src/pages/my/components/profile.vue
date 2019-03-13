<template>
  <div class="container">
    <div class="left-part">
      <div class="image-container">
        <img :src="user.avatar_url" class="image" v-if="user.avatar_url">
      </div>
    </div>
    <div class="right-part">
      <div class="nickname">{{ user.nickname }}</div>
      <div class="edit">编辑资料</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Profile',
  data () {
    return {
      user: {
        nickname: '',
        avatar_url: ''
      }
    }
  },
  mounted () {
    this.axios.get('/user')
      .then((data) => {
        this.user = data
      })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'

.container
  width: 85%
  display: flex
  .left-part
  .image-container
    width: 80px
    height: 80px
    border-radius: 80px
    background: $color-image-background
    overflow: hidden
    border: 1px solid $color-border
    .image
      width: 80px
      height: 80px
  .right-part
    margin-left: 24px
    margin-top: 12px
    display: flex
    flex-direction: column
    .nickname
      font-weight: bold
      font-size: $font-size-title
    .edit
      margin-top: 12px
      color: $color-theme
      // font-size: $font-size-mediu
</style>
