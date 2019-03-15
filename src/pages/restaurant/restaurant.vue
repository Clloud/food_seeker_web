<template>
  <div class="container">
    <restaurant-header></restaurant-header>
    <restaurant-swiper :images="restaurant.images"></restaurant-swiper>
    <restaurant-info :restaurant="restaurant"></restaurant-info>
    <item title="介绍" button="查看详情">
      <div class="content">{{ restaurant.introduction }}</div>
    </item>
    <restaurant-foods
      :restaurant="restaurant"
      :id="$route.params.id"></restaurant-foods>
    <restaurant-reviews
      :restaurant="restaurant"
      :id="$route.params.id"></restaurant-reviews>
    <item title="位置">{{ restaurant.location }}</item>
    <!-- 保持底部间距 -->
    <div class="bottom"></div>
    <bottom-bar :restaurant="restaurant"></bottom-bar>
  </div>
</template>

<script type="text/ecmascript-6">
import RestaurantHeader from './components/header'
import RestaurantSwiper from './components/swiper'
import RestaurantInfo from './components/info'
import RestaurantReviews from './components/reviews'
import RestaurantFoods from './components/foods'
import Item from './components/item'
import BottomBar from './components/bottom-bar'
import Restaurant from 'models/restaurant'

export default {
  name: 'Restaurant',
  components: {
    RestaurantHeader,
    RestaurantSwiper,
    RestaurantInfo,
    RestaurantReviews,
    RestaurantFoods,
    Item,
    BottomBar
  },
  data () {
    return {
      lastId: 0,
      restaurant: {
        name: '',
        introduction: '',
        location: '',
        images: [],
        grade: 0,
        campus_name: '',
        canteen_name: ''
      }
    }
  },
  methods: {
    _getRestaurant (id) {
      Restaurant.getRestaurant(id).then((data) => {
        this.restaurant = data
      })
    }
  },
  mounted () {
    let id = this.$route.params.id
    this._getRestaurant(id)
  },
  activated () {
    if (this.$route.params.id !== this.lastId) {
      let id = this.$route.params.id
      this.lastId = id
      this._getRestaurant(id)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.container
  display: flex
  flex-direction: column
  align-items: center
  .bottom
    height: 60px
</style>
