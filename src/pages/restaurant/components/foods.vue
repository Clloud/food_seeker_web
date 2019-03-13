<template>
  <item title="菜品" button="查看更多菜品"  @click="moreFood">
    <div class="foods">
      <div class="food"
        v-for="food in foods"
        :key="food.id">
        <div class="left-part">
          <div class="image-container">
            <img :src="imageUrl(food.images)" class="image" />
          </div>
        </div>
        <div class="right-part">
          <div class="title">{{ food.name }}</div>
          <div class="price">￥{{ food.price }}</div>
        </div>
      </div>
    </div>
  </item>
</template>

<script type="text/ecmascript-6">
import Item from './item'

export default {
  name: 'RestaurantFoods',
  components: {
    Item
  },
  props: {
    restaurant: Object,
    id: String
  },
  data () {
    return {
      foods: []
    }
  },
  methods: {
    moreFood () {
      this.$router.push(`/restaurant/${this.$route.params.id}/foods`)
    },
    getFoods (id) {
      this.axios.get(`/restaurant/${id}/foods?per_page=3`)
        .then((data) => {
          this.foods = data
        })
    },
    imageUrl (images) {
      return images.length ? images[0].url : ''
    }
  },
  mounted () {
    this.getFoods(this.id)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'
@import '~common/style/mixin'

.foods
  display: flex
  flex-direction: column
  .food
    display: flex
    margin-bottom: 24px
    .left-part
      margin-right: 18px
      .image-container
        display: flex
        align-items: center
        height: 96px
        width: 96px
        background: $color-image-background
        border-radius: 3.5px
        overflow: hidden
        .image
          width: 100%
    .right-part
      display: flex
      flex-direction: column
      justify-content: space-between
      padding: 0 0 3px
      .title
        font-size: $font-size-large
        line-height: 24px
        ellipsis(2)
      .price
        font-family: 'PingFang SC'
        font-size: $font-size-medium-x
        font-weight: bold
</style>
