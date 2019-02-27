<template>
  <div class="container">
    <div class="nav">
      <div class="iconfont back"
        @click="back">&#xe612;</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'NavBar',
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.container
  height: 60px
  display: flex
  justify-content: center
  align-items: center
  // background: #eeeeee
  .nav
    display: flex
    width: 85%
    .back
      font-size: 20px
      font-weight: bold
</style>
