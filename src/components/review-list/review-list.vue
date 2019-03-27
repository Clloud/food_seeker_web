<template>
  <div class="reviews">
      <div class="review"
        v-for="review in reviews"
        :key="review.id"
        @click="$router.push(`/review/${review.id}`)">
        <div class="info">
          <div class="left-part">
            <div class="image-wrapper">
              <img class="avatar"
                :src="review.user.avatar_url"
                v-if="review.user.avatar_url"/>
            </div>
          </div>
          <div class="right-part">
            <div class="right-top">
              <div class="nickname">{{ review.user.nickname }}</div>
              <div class="rating">
                <span class="stars">
                  <span class="iconfont icon-star"
                    v-for="i in review.grade"
                    :key="i">&#xe6b0;</span>
                </span>
              </div>
            </div>
            <div class="time" v-time="review.create_time"></div>
          </div>
        </div>
        <div class="content">{{ review.content }}</div>
        <div class="buttons">
          <div class="iconfont button">&#xe600;</div>
          <div class="iconfont button">&#xe635;</div>
          <div class="iconfont button">&#xe936;</div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'ReviewList',
  props: {
    reviews: Array
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'
@import '~common/style/mixin'

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
      margin-bottom: 18px
      .left-part
        .image-wrapper
          width: 45px
          height: 45px
          border-radius: 45px
          background: $color-image-background
          overflow: hidden
          .avatar
            width: 45px
            height: 45px
            border: none
      .right-part
        flex: 1
        margin: 2px 0  0 12px
        display: flex
        flex-direction: column
        .right-top
          flex: 1
          display: flex
          align-items: center
          justify-content: space-between
          margin-bottom: 8px
          .nickname
            font-weight: bold
          .rating
            display: flex
            align-items: center
            .stars
              display: flex
              margin-right: 6px
              .icon-star
                color: $color-theme
                font-size: $font-size-small
        .time
          font-size: $font-size-small
          font-family: 'PingFang SC'
    .content
      font-size: $font-size-medium-x
      line-height: 22px
      ellipsis(3)
  .buttons
    margin-top: 18px
    display: flex
    .button
      color: #868686
      padding-right: 24px
      font-size: 20px
</style>
