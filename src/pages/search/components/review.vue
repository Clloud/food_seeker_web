<template>
  <block title="点评" button="查看全部点评">
    <div class="reviews">
      <review v-for="review in reviews"
        :key="review.id"
        :review="review">
      </review>
    </div>
  </block>
</template>

<script type="text/ecmascript-6">
import Block from './block'
import Review from 'components/review/review'

export default {
  name: 'ReviewBlock',
  components: {
    Block,
    Review
  },
  data () {
    return {
      reviews: []
    }
  },
  methods: {
    getReviews () {
      this.axios.get('/restaurant/1/reviews?per_page=3')
        .then((data) => {
          this.reviews = data
        })
    }
  },
  mounted () {
    this.getReviews()
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
