<template>
  <div>
    <nav-bar></nav-bar>
    <restaurant-swiper :images="restaurant.images"></restaurant-swiper>
    <div class="wrapper">
      <restaurant-header :name="restaurant.name"></restaurant-header>
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
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import RestaurantSwiper from './components/swiper'
import RestaurantHeader from './components/header'
import RestaurantReviews from './components/reviews'
import RestaurantFoods from './components/foods'
import Item from './components/item'
import NavBar from 'components/nav-bar/nav-bar'

export default {
  name: 'Restaurant',
  components: {
    RestaurantSwiper,
    RestaurantHeader,
    RestaurantReviews,
    RestaurantFoods,
    Item,
    NavBar
  },
  data () {
    return {
      lastId: 0,
      restaurant: {
        name: '',
        introduction: '',
        location: '',
        images: []
      }
    }
  },
  methods: {
    getRestaurant (id) {
      this.axios.get('/restaurant/' + id)
        .then((data) => {
          this.restaurant = data
        })
    }
  },
  mounted () {
    let id = this.$route.params.id
    this.getRestaurant(id)
  },
  activated () {
    if (this.$route.params.id !== this.lastId) {
      let id = this.$route.params.id
      this.lastId = id
      this.getRestaurant(id)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.wrapper
  display: flex
  flex-direction: column
  align-items: center
</style>
