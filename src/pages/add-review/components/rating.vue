<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div class="stars">
      <div v-for="index in 5" :key="index" @click="onStar(index)">
        <span class="iconfont star" v-if="index > rank">&#xe646;</span>
        <span class="iconfont star activated" v-else>&#xe6b0;</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Rating',
  props: {
    title: String
  },
  data () {
    return {
      rank: 0
    }
  },
  methods: {
    onStar (index) {
      this.rank = index
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'

.container
  width: 85%
  display: flex
  margin: 8px 0
  align-items: center
  .title
    font-size: $font-size-large-x
    color: $color-shadow-d
    width: 70px
  .stars
    display: flex
    .star
      font-size: $font-size-large-xx
      color: $color-shadow-d
      padding: 0 3px 3px
    .activated
      color: $color-theme
      font-size: $font-size-large-xx
</style>
