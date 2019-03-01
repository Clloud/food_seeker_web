<template>
  <div>
    <restaurant-swiper :images="images"></restaurant-swiper>
    <div class="wrapper">
      <restaurant-header :name="name"></restaurant-header>
      <item title="介绍" button="查看详情">
        <div class="content">{{ intro }}</div>
      </item>
      <item title="评价" button="查看更多评价" @click="onClick">
        <review v-for="review in reviews" 
          :key="review.id" 
          :review="review">
        </review>
      </item>
      <item title="位置">{{location}}</item>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import RestaurantSwiper from './components/swiper'
import RestaurantHeader from './components/header'
import Item from './components/item'
import Review from './components/review'

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
          "id": 1,
          "url": "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg"
        },
        {
          "id": 2,
          "url": "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg"
        }
      ],
      name: '汤哥特色风味',
      intro: '这是一些介绍这是一些介绍这是一些介绍这是一些介绍这是一些介绍这是一些介绍这是一些介绍',
      location: '四食堂二楼',
      reviews: [{
        "user": {
          "nickname": "Cloud",
          "avatar_url": "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg"
        },
        "content": "我吃到了虫子我吃到了虫子我吃到了虫子我吃到了虫子我吃到了虫子我吃到了虫子我吃到了虫子我吃到了虫子我吃到了虫子我吃到了虫子！",
        "create_time": 1549967536,
        "grade": 1,
        "id": 1,
        "images": [
          {
            "id": 1,
            "url": "http://api.foodadvisor.top/food_seeker/images/20190212/2f46051c2e9811e9aaf754ee75dc7dce.jpg"
          },
          {
            "id": 8,
            "url": "http://api.foodadvisor.top/food_seeker/images/20190212/d6a31b622ea211e9be1654ee75dc7dce.jpg"
          }
        ]
      },
      {
        "user": {
          "nickname": "Cloud",
          "avatar_url": "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg"
        },
        "content": "我吃到了虫子我吃到了虫子我吃到了虫子我吃到了虫子我吃到了虫子我吃到了虫子我吃到了虫子我吃到了虫子我吃到了虫子我吃到了虫子！",
        "create_time": 1549967536,
        "grade": 1,
        "id": 2,
        "images": [
          {
            "id": 1,
            "url": "http://api.foodadvisor.top/food_seeker/images/20190212/2f46051c2e9811e9aaf754ee75dc7dce.jpg"
          },
          {
            "id": 8,
            "url": "http://api.foodadvisor.top/food_seeker/images/20190212/d6a31b622ea211e9be1654ee75dc7dce.jpg"
          }
        ]
      }]
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
          console.log(data)
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
