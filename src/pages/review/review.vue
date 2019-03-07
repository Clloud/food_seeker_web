<template>
  <div class="container">
    <nav-bar title="点评"></nav-bar>
    <div class="reviews">
      <div class="review"
        v-for="review in reviews"
        :key="review.id">
        <div class="info">
          <div class="left-part">
            <img :src="review.user.avatar_url" alt="" class="avatar" />
          </div>
          <div>
            <div class="right-part">
              <div class="nickname">{{ review.user.nickname }}</div>
              <div class="time" v-time="review.create_time"></div>
            </div>
          </div>
        </div>
        <div class="content">{{ review.content }}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar'

export default {
  name: 'Review',
  components: {
    NavBar
  },
  data () {
    return {
      reviews: []
    }
  },
  mounted () {
    this.axios.get(`/restaurant/${this.$route.params.id}/reviews`)
      .then((data) => {
        this.reviews = data
      })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'

.container
  display: flex
  flex-direction: column
  align-items: center
.reviews
  display: flex
  flex-direction: column
  width: 85%
  .review
    display: flex
    flex-direction: column
    border-bottom: 1px solid $color-border
    box-sizing: border-box
    margin-bottom: 18px
    padding: 24px 0
    .info
      display: flex
      .left-part
        .avatar
          width: 45px
          height: 45px
          border-radius: 45px
          background: #eeeeee
      .right-part
        margin: 2px 0  0 12px
        display: flex
        flex-direction: column
        .nickname
          font-weight: bold
          margin-bottom: 8px
        .time
          font-size: $font-size-small
          font-family: 'PingFang SC'
    .content
      font-size: $font-size-medium-x
      line-height: 22px
</style>
