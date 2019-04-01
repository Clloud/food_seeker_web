<template>
  <div class="container">
    <div class="header">
      <div class="comment-title">
        {{ title }}
      </div>
    <div class="button" @click="addComment">写评论</div>
    </div>
    <div class="comments" v-for="comment in _comments" :key="comment.id">  <!--渲染列表，以id为key，每次仅改变comment内容-->
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
    <div v-if="comments.length">
      <div class="view-more" @click="viewMore">查看更多评论</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherComment',
  props: {
    comments: Array
  },
  computed: {
    _comments () {
      return this.comments.slice(0, 3)
    },
    title () {
      let count = this.comments.length
      return count ? `${count}条评论` : '评论'
    }
  },
  methods: {
    viewMore () {
      this.$router.push(`/review/${this.$route.params.id}/comments`)
    },
    addComment () {
      this.$emit('comment')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/style/variable'

.container
  width: 85%
  margin: 48px 0 60px
  .header
    display: flex
    justify-content: space-between
    align-items: flex-end
    .comment-title
      font-size: 24px
      font-weight: bold
    .button
      font-size: 14px
      color: $color-theme
  .user-comment
    display: flex
    flex-direction: column
    margin: 39px 0
    .user-id
      display: flex
      margin-bottom: 16px
      align-items: flex-end
      .user-name
        font-size: 16px
        font-weight: bold
        margin-right: 7px
      .time
        color: $color-shadow-d
        font-size: 14px
    .comment-content
      font-size: 16px
      line-height: 24px
  .view-more
    color: $color-theme
    margin: -20px 0 40px
    extend-click()
    width: 100px
</style>
