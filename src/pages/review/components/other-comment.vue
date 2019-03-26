<template>
  <div class="container">
    <div class="header">
      <div class="comment-title">
        这是评论标题
      </div>
    <div class="button">写评论</div>
    </div>
    <div class="comments" v-for="comment in comments" :key="comment.id">  <!--渲染列表，以id为key，每次仅改变comment内容-->
      <div class="user-comment">
        <div class="user-id">
            <div class="user-name">
              {{ comment.user.nickname }}
            </div>
            <div class="time" v-time="comment.create_time"></div> <!--调用时间转化的语法-->
        </div>
        <div class="comment-content">
          {{ comment.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherComment',
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
  width: 85%
  margin-top: 48px
  .header
    display: flex
    justify-content: space-between
    align-items: flex-end
    .comment-title
      font-size: 24px
      font-weight: bolder
    .button
      font-size: 12.5px
      color: $color-theme
  .user-comment
    display: flex
    flex-direction: column
    margin: 32px 0
    .user-id
      display: flex
      margin-bottom: 16px
      .user-name
        font-size: 16px
        font-weight: bold
        margin-right: 7px
      .time
        color: $color-shadow-d
    .comment-content
      font-size: 18px
</style>
