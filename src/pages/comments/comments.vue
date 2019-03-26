<template>
  <div class="page">
    <nav-bar :title="title" class="nav"></nav-bar>
    <comment-list :comments="comments"></comment-list>
    <add-comment :reviewId="$route.params.id" @succeed="refresh"></add-comment>
  </div>
</template>

<script>
import NavBar from 'components/nav-bar/nav-bar'
import AddComment from '../review/components/add-comment'
import CommentList from './components/comment-list'
import Comment from 'models/comment'

export default {
  name: '',
  components: {
    NavBar,
    AddComment,
    CommentList
  },
  data () {
    return {
      lastId: 0,
      title: '评论',
      comments: []
    }
  },
  methods: {
    refresh () {
      this.getComments()
    },
    _getComments () {
      Comment.getComments(this.$route.params.id).then((data) => {
        this.comments = data
        this.title = `${data.length}条评论`
      })
    }
  },
  mounted () {
    this._getComments()
  },
  activated () {
    if (this.$route.params.id !== this.lastId) {
      this.lastId = this.$route.params.id
      this._getComments()
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
  display: flex
  flex-direction: column
  align-items: center
  .nav
    position: fixed
</style>
