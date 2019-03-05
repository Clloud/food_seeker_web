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
    <merchant :restaurant="restaurant" @open="open"></merchant>
    <assosiate-restaurant :open="activated" @close="close"></assosiate-restaurant>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar'
import Rating from './components/rating'
import ReviewContent from './components/review-content'
import Merchant from './components/merchant'
import AssosiateRestaurant from './components/assosiate-restaurant'

export default {
  name: 'AddReview',
  components: {
    NavBar,
    Rating,
    ReviewContent,
    Merchant,
    AssosiateRestaurant
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
      return this.$store.state.assosiateRestaurant
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
        console.log(tasteRank)
        // console.log(comfortRank)
        console.log(content)
        console.log(restaurant.id)
      }
    }
  },
  watch: {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  display: flex
  flex-direction: column
  align-items: center
</style>
