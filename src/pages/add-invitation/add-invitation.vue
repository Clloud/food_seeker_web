<template>
  <div class="page">
    <nav-bar title="约饭"
      button="发布"
      @submit="onSubmit"
      :buttonActivated="buttonActivated">
    </nav-bar>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar'

export default {
  name: 'AddInvitation',
  components: {
    NavBar
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
