<template>
  <div class="page">
    <nav-bar title="写点评"
      button="发布"
      @submit="onSubmit"
      :buttonActivated="buttonActivated">
    </nav-bar>
    <rating title="口味" ref="taste"></rating>
    <rating title="舒适度" ref="comfort"></rating>
    <review-content ref="content"></review-content>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar'
import Rating from './components/rating'
import ReviewContent from './components/review-content'

export default {
  name: 'AddReview',
  components: {
    NavBar,
    Rating,
    ReviewContent
  },
  data () {
    return {
      content: '',
      buttonActivated: false
    }
  },
  mounted () {
  },
  methods: {
    onSubmit () {
      let tasteRank = this.$refs.taste.rank
      let comfortRank = this.$refs.comfort.rank
      let content = this.$refs.content.value
      console.log(tasteRank)
      console.log(comfortRank)
      console.log(content)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  display: flex
  flex-direction: column
  align-items: center
</style>
