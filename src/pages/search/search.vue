<template>
  <div class="page">
    <search-box @search="search" ref="search"></search-box>
    <div class="results">
      <restaurant-block></restaurant-block>
      <food-block></food-block>
      <review-block></review-block>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import SearchBox from './components/search-box'
import RestaurantBlock from './components/restaurant'
import ReviewBlock from './components/review'
import FoodBlock from './components/food'
import * as types from 'store/mutation-types'

export default {
  name: 'Search',
  components: {
    SearchBox,
    RestaurantBlock,
    FoodBlock,
    ReviewBlock
  },
  methods: {
    search (keyword) {
      // search restaurants
      this.axios.get('/search/restaurants?per_page=4&q=' + keyword)
        .then((data) => {
          this.$store.commit(types.SET_RESTAURANTS, data.items)
        })
      // search food
      this.axios.get('/search/foods?per_page=4&q=' + keyword)
        .then((data) => {
          this.$store.commit(types.SET_FOODS, data.items)
        })
      // search reviews
      this.axios.get('/search/reviews?per_page=4&q=' + keyword)
        .then((data) => {
          this.$store.commit(types.SET_REVIEWS, data.items)
        })
    },
    recommend () {
      // recommend restaurants
      this.axios.get('/feed/restaurants?per_page=3')
        .then((data) => {
          this.$store.commit(types.SET_RESTAURANTS, data)
        })
      // recommend food
      this.axios.get('/feed/foods?per_page=3')
        .then((data) => {
          this.$store.commit(types.SET_FOODS, data)
        })
      // recommend reviews
      this.axios.get('/feed/reviews?per_page=3')
        .then((data) => {
          this.$store.commit(types.SET_REVIEWS, data)
        })
    }
  },
  mounted () {
    if (this.$refs.search.keyword === '') {
      this.recommend()
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  display: flex
  flex-direction: column
  align-items: center
  margin-bottom: 60px
  width: 100%
  .results
    width: 100%
    margin-top: 66px
    display: flex
    flex-direction: column
    align-items: center
</style>
