<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div class="description">{{ description }}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Header',
  props: {
    title: String,
    description: String
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable.styl'

.container
  display: flex
  flex-direction: column
  align-items: flex-start
  width: 85%
  max-width: 318.75px
  .title
    line-height: 42px
    font-size: $font-size-title
    font-weight: bold
  .description
    line-height: 24px
    font-size: $font-size-medium-x
</style>
