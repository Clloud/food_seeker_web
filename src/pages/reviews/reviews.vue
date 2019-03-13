<template>
  <div class="container">
    <nav-bar title="点评"></nav-bar>
    <review-list :reviews="reviews"></review-list>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar'
import ReviewList from 'components/review-list/review-list'

export default {
  name: 'Review',
  components: {
    NavBar,
    ReviewList
  },
  data () {
    return {
      lastId: 0,
      reviews: []
    }
  },
  methods: {
    getReviews (id) {
      this.axios.get(`/restaurant/${id}/reviews`)
        .then((data) => {
          this.reviews = data
        })
    }
  },
  mounted () {
    this.getReviews(this.$route.params.id)
  },
  activated () {
    if (this.$route.params.id !== this.lastId) {
      let id = this.$route.params.id
      this.lastId = id
      this.getReviews(id)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.container
  display: flex
  flex-direction: column
  align-items: center
</style>
