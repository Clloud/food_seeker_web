<template>
  <div class="page">
    <nav-bar title="写点评"
      button="发布"
      @submit="onSubmit"
      :buttonActivated="buttonActivated">
    </nav-bar>
    <rating title="口味" ref="taste"></rating>
    <!-- <rating title="舒适度" ref="comfort"></rating> -->
    <review-content ref="content"></review-content>
    <merchant :restaurant="restaurant" @open="open" title="关联商户"></merchant>
    <associate-restaurant :open="activated" @close="close"></associate-restaurant>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar'
import Rating from './components/rating'
import ReviewContent from './components/review-content'
import Merchant from './components/merchant'
import AssociateRestaurant from './components/associate-restaurant'
import * as types from 'store/mutation-types'
import Review from 'models/review'

export default {
  name: 'AddReview',
  components: {
    NavBar,
    Rating,
    ReviewContent,
    Merchant,
    AssociateRestaurant
  },
  data () {
    return {
      content: '',
      buttonActivated: true,
      activated: false
    }
  },
  computed: {
    restaurant () {
      return this.$store.state.associateRestaurant
    }
  },
  methods: {
    open () {
      this.activated = true
    },
    close () {
      this.activated = false
    },
    onSubmit () {
      let tasteRank = this.$refs.taste.rank
      // let comfortRank = this.$refs.comfort.rank
      let content = this.$refs.content.value
      let restaurant = this.restaurant
      if (tasteRank /* && comfortRank */ && content && restaurant) {
        Review.addReview({
          restaurant_id: restaurant.id,
          content: content,
          grade: tasteRank,
          image_amount: 0
        })
          .then((data) => {
            this.$store.commit(types.SET_ASSOCIATE_RESTAURANT, null)
            this.$router.replace('/my/reviews')
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  },
  beforeMount () {
    if (!localStorage.token) {
      this.$router.replace('/login')
    }
  },
  activated () {
    if (!localStorage.token) {
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  display: flex
  flex-direction: column
  align-items: center
</style>
