<template>
  <div class="page">
    <search-box @search="search"></search-box>
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
      this.axios.get('/search/restaurants?per_page=3&q=' + keyword)
        .then((data) => {
          console.log(data)
        })
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
  .results
    margin-top: 66px
    display: flex
    flex-direction: column
    align-items: center
</style>
