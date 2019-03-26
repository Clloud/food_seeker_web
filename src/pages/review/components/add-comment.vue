<template>
  <div class="container">
      <div class="avatar">
        <img :src="user.avatar_url" alt="" class="avatar">
      </div>
      <div class="input-area">
        <input type="text"
          class="input"
          placeholder="添加评论..."
          v-model="comment">
      </div>
      <div class="button"
        :class="{'activated': comment}"
        @click="onSubmit">发布</div>
  </div>
</template>

<script type="text/ecmascript-6">
import User from 'models/user'
import Comment from 'models/comment'

export default {
  name: 'AddComment',
  props: {
    reviewId: 0
  },
  data () {
    return {
      user: {
        avatar_url: ''
      },
      comment: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.comment) {
        let comment = {
          review_id: this.reviewId,
          content: this.comment
        }
        Comment.addComment(comment).then((data) => {
          this.comment = ''
          this.$emit('succeed')
        })
      }
    }
  },
  mounted () {
    User.getUser().then((data) => {
      this.user = data
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'

.container
  display: flex
  justify-content: space-between
  align-items: center
  position: fixed
  bottom: 0
  left: 0
  right: 0
  height: 60px
  border-top: 1px solid $color-border
  padding: 0 7.5%
  background: #fff
  .avatar
    width: 40px
    height: 40px
    border-radius: 40px
    background: $color-image-background
  .input-area
    flex-grow: 1
    margin: 0 10px
  .input
    outline: 0
    width: 100%
  input::-webkit-input-placeholder
    color: #c6c6c6
  .button
    color: $color-theme-l
  .activated
    color: $color-theme
</style>
