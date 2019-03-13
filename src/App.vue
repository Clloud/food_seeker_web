<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <router-view name="tab-bar" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
