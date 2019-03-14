<template>
  <div class="page">
    <nav-bar></nav-bar>
    <user :user="review.user" :time="review.create_time"></user>
    <div class="content">{{ review.content }}</div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar'
import User from './components/user'
import Review from 'models/review'

export default {
  name: 'Review',
  components: {
    NavBar,
    User
  },
  data () {
    return {
      lastId: 0,
      review: null
    }
  },
  methods: {
    _getReview (id) {
      Review.getReview(id).then((data) => {
        this.review = data
        console.log(data)
      })
    }
  },
  mounted () {
    this._getReview(this.$route.params.id)
  },
  activated () {
    if (this.$route.params.id !== this.lastId) {
      let id = this.$route.params.id
      this.lastId = id
      this._getReview(id)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/mixin'

.page
  width: 100%
  display: flex
  flex-direction: column
  align-items: center
  .content
    width: 85%
    font-size: $font-size-medium-x
    line-height: 27px
</style>
