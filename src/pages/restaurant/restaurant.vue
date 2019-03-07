<template>
  <div>
    <restaurant-swiper :images="images"></restaurant-swiper>
    <div class="wrapper">
      <restaurant-header :name="restaurant.name"></restaurant-header>
      <item title="介绍" button="查看详情">
        <div class="content">{{ restaurant.introduction }}</div>
      </item>
      <item title="点评" button="查看更多点评" @click="moreReview">
        <review v-for="review in reviews"
          :key="review.id"
          :review="review">
        </review>
      </item>
      <item title="位置">{{ location }}</item>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import RestaurantSwiper from './components/swiper'
import RestaurantHeader from './components/header'
import Item from './components/item'
import Review from 'components/review/review'

export default {
  name: 'Restaurant',
  components: {
    RestaurantSwiper,
    RestaurantHeader,
    Item,
    Review
  },
  data () {
    return {
      restaurant: null,
      reviews: [],
      reviewCount: 3
    }
  },
  methods: {
    getRestaurant (id) {
      this.axios.get('/restaurant/' + id)
        .then((data) => {
          this.restaurant = data
        })
    },
    getReviews (id) {
      this.axios.get(`/restaurant/${id}/reviews?per_page=${this.reviewCount}`)
        .then((data) => {
          this.reviews = data
        })
    },
    moreReview () {
      this.$router.push(`/restaurant/${this.$route.params.id}/review`)
    }
  },
  mounted () {
    let id = this.$route.params.id
    this.getRestaurant(id)
    this.getReviews(id)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/mixin'

.wrapper
  display: flex
  flex-direction: column
  align-items: center
  .content
    font-size: $font-size-medium-x
    line-height: 20px
    ellipsis(3)
</style>
