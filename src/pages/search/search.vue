<template>
  <div class="page">
    <search-box @search="search" ref="search"></search-box>
    <div class="results">
      <restaurant-block @more="moreRestaurants" :showMore="showMore"></restaurant-block>
      <food-block @more="moreFoods" :showMore="showMore"></food-block>
      <review-block @more="moreReviews" :showMore="showMore"></review-block>
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
  data () {
    return {
      keyword: '',
      defaultCount: 3,
      showMore: true
    }
  },
  methods: {
    search (keyword) {
      this.keyword = this.$refs.search.keyword
      this.getRestaurants()
      this.getFoods()
      this.getReviews()
    },
    recommend () {
      this.recommendRestaurants()
      this.recommendFoods()
      this.recommendReviews()
    },
    moreRestaurants () {
      this.clear()
      this.keywords ? this.getRestaurants(30) : this.recommendRestaurants(30)
    },
    moreFoods () {
      this.clear()
      this.keywords ? this.getFoods(30) : this.recommendFoods(30)
    },
    moreReviews () {
      this.clear()
      this.keywords ? this.getReviews(30) : this.recommendReviews(30)
    },
    clear () {
      this.showMore = false
      this.$store.commit(types.SET_RESTAURANTS, [])
      this.$store.commit(types.SET_FOODS, [])
      this.$store.commit(types.SET_REVIEWS, [])
    },
    getRestaurants (count = this.defaultCount) {
      this.axios.get(`/search/restaurants?per_page=${count}&q=${this.keyword}`)
        .then((data) => {
          this.$store.commit(types.SET_RESTAURANTS, data.items)
        })
    },
    getFoods (count = this.defaultCount) {
      this.axios.get(`/search/foods?per_page=${count}&q=${this.keyword}`)
        .then((data) => {
          this.$store.commit(types.SET_FOODS, data.items)
        })
    },
    getReviews (count = this.defaultCount) {
      this.axios.get(`/search/reviews?per_page=${count}&q=${this.keyword}`)
        .then((data) => {
          this.$store.commit(types.SET_REVIEWS, data.items)
        })
    },
    recommendRestaurants (count = this.defaultCount) {
      this.axios.get(`/feed/restaurants?per_page=${count}`)
        .then((data) => {
          this.$store.commit(types.SET_RESTAURANTS, data)
        })
        .catch(() => {
          this.axios.get(`/feed/restaurants?per_page=${count}`)
            .then((data) => {
              this.$store.commit(types.SET_RESTAURANTS, data)
            })
        })
    },
    recommendFoods (count = this.defaultCount) {
      this.axios.get(`/feed/foods?per_page=${count}`)
        .then((data) => {
          this.$store.commit(types.SET_FOODS, data)
        })
        .catch(() => {
          this.axios.get(`/feed/foods?per_page=${count}`)
            .then((data) => {
              this.$store.commit(types.SET_FOODS, data)
            })
        })
    },
    recommendReviews (count = this.defaultCount) {
      this.axios.get(`/feed/reviews?per_page=${count}`)
        .then((data) => {
          this.$store.commit(types.SET_REVIEWS, data)
        })
        .catch(() => {
          this.axios.get(`/feed/reviews?per_page=${count}`)
            .then((data) => {
              this.$store.commit(types.SET_REVIEWS, data)
            })
        })
    }
  },
  mounted () {
    this.keyword = this.$refs.search.keyword
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
