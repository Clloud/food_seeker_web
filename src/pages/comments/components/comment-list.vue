<template>
  <div class="container">
    <div v-if="comments.length">
      <div class="comments"
        v-for="comment in comments"
        :key="comment.id">
        <div class="user-part">
          <div class="left-part">
            <img :src="comment.user.avatar_url" class="image">
          </div>
          <div class="right-part">
            <div class="name">{{ comment.user.nickname }}</div>
            <div class="time" v-time="comment.create_time"></div>
          </div>
        </div>
        <div class="content-part">{{ comment.content }}</div>
      </div>
    </div>
    <div v-else class="no-content">还没有评论呢</div>
  </div>
</template>

<script>
export default {
  name: 'CommentList',
  props: {
    comments: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/style/variable'

.container
  display: flex
  flex-direction: column
  width: 85%
  margin: 60px 0
  .user-part
    display: flex
    .left-part
      height: 42px
      width: 42px
      border-radius: 42px
      background-color: $color-image-background
      margin-right: 8px
      .image
        width: 42px
        height: 42px
        border-radius: 42px
    .right-part
      display: flex
      flex-direction: column
      justify-content: space-between
      padding: 3px 0
      .name
        font-weight: bold
      .time
        font-size: 12px
        color: $color-text-l
  .content-part
    font-size: 16px
    line-height: 24px
    padding-bottom: 21px
    margin: 12px 0 21px
    border-bottom: 1px solid $color-border
  .no-content
    margin-top: 30px
    display: flex
    flex-direction: column
    align-items: center
    color: $color-text-l
</style>
