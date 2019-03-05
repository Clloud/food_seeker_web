<template>
  <div>
    <restaurant-swiper :images="images"></restaurant-swiper>
    <div class="wrapper">
      <restaurant-header :name="name"></restaurant-header>
      <item title="介绍" button="查看详情">
        <div class="content">{{ intro }}</div>
      </item>
      <item title="点评" button="查看更多点评" @click="onClick">
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
      images: [
        {
          'id': 1,
          'url': 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg'
        },
        {
          'id': 2,
          'url': 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg'
        }
      ],
      name: '汤哥特色风味',
      intro: '这是一些介绍这是一些介绍这是一些介绍这是一些介绍这是一些介绍这是一些介绍这是一些介绍',
      location: '四食堂二楼',
      reviews: []
    }
  },
  methods: {
    getRestaurant () {
      this.axios.get('/restaurant/1')
        .then((data) => {
          console.log(data)
        })
    },
    getReviews () {
      this.axios.get('/restaurant/1/reviews?per_page=3')
        .then((data) => {
          this.reviews = data
        })
    },
    onClick () {
      console.log('click')
    }
  },
  mounted () {
    this.getRestaurant()
    this.getReviews()
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
