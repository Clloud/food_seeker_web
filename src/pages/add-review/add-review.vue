<template>
  <div class="page">
    <nav-bar title="写点评" button="发布"></nav-bar>
    <rating title="口味"></rating>
    <rating title="舒适度"></rating>
    <review-content></review-content>
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
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  display: flex
  flex-direction: column
  align-items: center
</style>
