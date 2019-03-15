<template>
  <div class="page">
    <div class="search-box-holder" :style="opacityStyle"></div>
    <search-box @search="search" ref="search"></search-box>
    <home-swiper :show="showSwiper"></home-swiper>
    <div class="results" :style="holder">
      <restaurant-block @more="moreRestaurants" :showMore="showMore"></restaurant-block>
      <food-block @more="moreFoods" :showMore="showMore"></food-block>
      <review-block @more="moreReviews" :showMore="showMore"></review-block>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import HomeSwiper from './components/swiper'
import SearchBox from './components/search-box'
import RestaurantBlock from './components/restaurant'
import ReviewBlock from './components/review'
import FoodBlock from './components/food'
import * as types from 'store/mutation-types'
import Search from 'models/search'
import Feed from 'models/feed'

export default {
  name: 'Search',
  components: {
    SearchBox,
    RestaurantBlock,
    FoodBlock,
    ReviewBlock,
    HomeSwiper
  },
  data () {
    return {
      keyword: '',
      defaultCount: 3,
      showMore: true,
      showSwiper: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  computed: {
    holder () {
      return this.showSwiper ? '' : 'margin-top:60px'
    }
  },
  methods: {
    search (keyword) {
      // 隐藏轮播图
      this.showSwiper = false
      // 滑动到页面顶部
      window.scroll(0, 0)
      //
      this.showMore = true
      this.keyword = this.$refs.search.keyword
      this.getRestaurants()
      this.getFoods()
      this.getReviews()
    },
    recommend () {
      this.recommendRestaurants()
      this.recommendFoods()
      this.recommendReviews()
      this.recommendBanners()
    },
    moreRestaurants () {
      this.clear()
      this.keyword ? this.getRestaurants(30) : this.recommendRestaurants(30)
    },
    moreFoods () {
      this.clear()
      this.keyword ? this.getFoods(30) : this.recommendFoods(30)
    },
    moreReviews () {
      this.clear()
      this.keyword ? this.getReviews(30) : this.recommendReviews(30)
    },
    clear () {
      this.showMore = false
      this.$store.commit(types.SET_RESTAURANTS, [])
      this.$store.commit(types.SET_FOODS, [])
      this.$store.commit(types.SET_REVIEWS, [])
    },
    getRestaurants (count = this.defaultCount) {
      Search.searchRestaurants(this.keyword, count).then((data) => {
        this.$store.commit(types.SET_RESTAURANTS, data.items)
      })
    },
    getFoods (count = this.defaultCount) {
      Search.searchFoods(this.keyword, count).then((data) => {
        this.$store.commit(types.SET_FOODS, data.items)
      })
    },
    getReviews (count = this.defaultCount) {
      Search.searchReviews(this.keyword, count).then((data) => {
        this.$store.commit(types.SET_REVIEWS, data.items)
      })
    },
    recommendRestaurants (count = this.defaultCount) {
      Feed.feedRestaurants(count).then((data) => {
        this.$store.commit(types.SET_RESTAURANTS, data)
      })
    },
    recommendFoods (count = this.defaultCount) {
      Feed.feedFoods(count).then((data) => {
        this.$store.commit(types.SET_FOODS, data)
      })
    },
    recommendReviews (count = this.defaultCount) {
      Feed.feedReviews(count).then((data) => {
        this.$store.commit(types.SET_REVIEWS, data)
      })
    },
    recommendBanners () {
      Feed.feedBanners().then((data) => {
        this.$store.commit(types.SET_BANNERS, data)
      })
    },
    handleScroll () {
      const top = document.documentElement.scrollTop
      let limit = this.showSwiper ? 360 : 0
      if (top > limit) {
        let opacity = top / (limit + 30)
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
      } else {
        this.opacityStyle = {
          opacity: 0
        }
      }
    }
  },
  mounted () {
    this.keyword = this.$refs.search.keyword
    if (this.$refs.search.keyword === '') {
      this.recommend()
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
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
    // margin-top: 66px
    display: flex
    flex-direction: column
    align-items: center
  .search-box-holder
    height: 72px
    background: #fff
    position: fixed
    top: 0
    width: 100%
</style>
