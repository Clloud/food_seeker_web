<template>
  <div class="page">
    <nav-bar></nav-bar>
    <user :user="review.user" :review="review"></user>
    <div class="content">{{ review.content }}</div>
    <restaurant :restaurant="review.restaurant"></restaurant>
    <add-comment :reviewId="review.id"></add-comment>
    <other-comment
      :comments="comments"
      :title="title"
      @succeed="refresh"></other-comment>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar'
import User from './components/user'
import Review from 'models/review'
import AddComment from './components/add-comment'
import Restaurant from './components/restaurant'
import OtherComment from './components/other-comment'
import Comment from 'models/comment'

export default {
  name: 'Review',
  components: {
    NavBar,
    User,
    AddComment,
    Restaurant,
    OtherComment
  },
  data () {
    return {
      lastId: 0,
      review: {
        restaurant: {
          name: '',
          location: ''
        },
        user: {
          avatar_url: '',
          nickname: ''
        }
      },
      comments: []
    }
  },
  methods: {
    refresh () {
      this._getComments(this.$route.params.id)
    },
    _getReview (id) {
      Review.getReview(id).then((data) => {
        this.review = data
      })
    },
    _getComments (id) {
      Comment.getComments(id).then((data) => {
        this.comments = data
      })
    }
  },
  mounted () {
    this._getReview(this.$route.params.id)
    this._getComments(this.$route.params.id)
  },
  activated () {
    if (this.$route.params.id !== this.lastId) {
      let id = this.$route.params.id
      this.lastId = id
      this._getReview(id)
      this._getComments(id)
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
