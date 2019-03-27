<template>
  <div class="page">
    <discover-header></discover-header>
    <push></push>
  </div>
</template>

<script type="text/ecmascript-6">
import DiscoverHeader from './components/header'
import Push from './components/push'

export default {
  name: 'Discover',
  components: {
    DiscoverHeader,
    Push
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  display: flex
  flex-direction: column
  align-items: center
</style>
