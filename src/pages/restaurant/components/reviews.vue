<template>
  <item title="点评" button="查看更多点评" @click="moreReview" v-if="restaurant.grade">
    <div class="header">
      <div class="left-part">
        <div class="grade">{{ restaurant.grade.toFixed(1) }}</div>
        <div class="rating">
          <div class="stars">
            <span class="iconfont icon-star"
                v-for="i in Math.round(restaurant.grade)"
                :key="i">&#xe6b0;</span>
            </div>
          <div class="amount">{{ restaurant.review_amount }}条点评</div>
        </div>
      </div>
    </div>
    <review v-for="review in reviews"
      :key="review.id"
      :review="review">
    </review>
  </item>
</template>

<script type="text/ecmascript-6">
import Review from 'components/review/review'
import Item from './item'
import ReviewModel from 'models/review'

export default {
  name: 'RestaurantReviews',
  components: {
    Item,
    Review
  },
  props: {
    restaurant: Object,
    id: String
  },
  data () {
    return {
      lastId: 0,
      reviews: []
    }
  },
  methods: {
    moreReview () {
      this.$router.push(`/restaurant/${this.$route.params.id}/reviews`)
    },
    _getReviews (id) {
      let count = 3
      ReviewModel.getReviews(id, count).then((data) => {
        this.reviews = data
      })
    }
  },
  mounted () {
    this._getReviews(this.id)
  },
  activated () {
    if (this.id !== this.lastId) {
      this.lastId = this.id
      this._getReviews(this.id)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'

.header
  display: flex
  margin: 0 0 24px 0
  .left-part
    display: flex
    .grade
      font-family: 'PingFang SC'
      font-size: 32px
      font-weight: bold
      margin-right: 12px
    .rating
      display: flex
      flex-direction: column
      justify-content: space-between
      .stars
        display: flex
        margin-right: 6px
        .icon-star
          color: $color-theme
          font-size: $font-size-medium
      .amount
        font-size: $font-size-small
        color: #999
</style>
