<template>
  <div class="page">
    <nav-bar title="我的点评"></nav-bar>
    <review-list :reviews="reviews"></review-list>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar'
import ReviewList from 'components/review-list/review-list'
import * as types from 'store/mutation-types'

export default {
  name: 'MyReview',
  components: {
    NavBar,
    ReviewList
  },
  data () {
    return {
      reviews: []
    }
  },
  methods: {
    // 根据token获取用户uid
    getUid () {
      if (this.$store.state.token) {
        return new Promise((resolve, reject) => {
          this.axios.post('/token/secret', {
            token: this.$store.state.token
          })
            .then((data) => {
              this.$store.commit(types.SET_UID, data.uid)
              resolve(data.uid)
            })
        })
      }
    },
    getReviews (uid) {
      this.axios.get(`/user/${uid}/reviews`)
        .then((data) => {
          this.reviews = data
        })
    }
  },
  mounted () {
    if (!this.$store.state.uid) {
      this.getUid().then((id) => {
        this.getReviews(id)
      })
    } else {
      this.getReviews(this.$store.state.uid)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  display: flex
  flex-direction: column
  align-items: center
</style>
