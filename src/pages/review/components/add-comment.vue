<template>
  <div class="container">
      <div class="image">
        <img :src="user.avatar_url" alt="" class="avatar">
      </div>
      <div class="input-area">
        <input type="text"
          class="input"
          placeholder="添加评论..."
          v-model="comment"
          @focus="onFocus">
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
    onFocus () {
      // 检查用户是否登录
      if (!localStorage.token) {
        this.$router.push('/login')
      }
    },
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
    },
    _getUser () {
      User.getUser().then((data) => {
        this.user = data
      })
    }
  },
  mounted () {
    if (localStorage.token) {
      this._getUser()
    }
  },
  activated () {
    if (localStorage.token) {
      this._getUser()
    }
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
  .image
    width: 40px
    height: 40px
    border-radius: 40px
    background: $color-image-background
    overflow: hidden
    .avatar
      width: 40px
      height: 40px
      border-radius: 40px
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
