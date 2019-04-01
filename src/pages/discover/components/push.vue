<template>
  <div class="container">
    <review-list :reviews="discover"></review-list>
  </div>
</template>

<script type="text/ecmascript-6">
import Feed from 'models/feed'
import * as types from 'store/mutation-types'
import ReviewList from 'components/review-list/review-list'
import { mapState } from 'vuex'

export default {
  name: 'Push',
  components: {
    ReviewList
  },
  computed: {
    ...mapState(['discover'])
  },
  methods: {
    _recommendReviews (count = 30) {
      Feed.feedReviews(count).then((data) => {
        this.$store.commit(types.SET_DISCOVER, data)
      })
    }
  },
  mounted () {
    this._recommendReviews()
  },
  activated () {
    this._recommendReviews()
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.container
  width: 100%
  display: flex
  flex-direction: column
  align-items: center
  margin: 60px 0 42px
</style>
