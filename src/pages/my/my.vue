<template>
  <div class="page">
    <profile v-if="$store.state.token"></profile>
    <log-out v-else></log-out>
    <items></items>
  </div>
</template>

<script type="text/ecmascript-6">
import LogOut from './components/log-out'
import Profile from './components/profile'
import Items from './components/items'

export default {
  name: 'My',
  components: {
    LogOut,
    Profile,
    Items
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  display: flex
  flex-direction: column
  align-items: center
  margin-top: 30px
</style>
