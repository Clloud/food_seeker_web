<template>
  <div class="page">
    <search-box></search-box>
  </div>
</template>

<script type="text/ecmascript-6">
import SearchBox from './components/search-box'

export default {
  name: 'Search',
  components: {
    SearchBox
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  display: flex
  flex-direction: column
  align-items: center
</style>
