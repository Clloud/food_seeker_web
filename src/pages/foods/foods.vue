<template>
  <div class="page">
    <nav-bar title="菜品" class="nav"></nav-bar>
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
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar'
import Food from 'models/food'

export default {
  name: 'Foods',
  components: {
    NavBar
  },
  data () {
    return {
      lastId: 0,
      foods: []
    }
  },
  methods: {
    _getFoods (id) {
      Food.getFoods(id)
        .then((data) => {
          this.foods = data
        })
    },
    imageUrl (images) {
      return images.length ? images[0].url : ''
    }
  },
  mounted () {
    this._getFoods(this.$route.params.id)
  },
  activated () {
    if (this.$route.params.id !== this.lastId) {
      let id = this.$route.params.id
      this.lastId = id
      this._getFoods(id)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'
@import '~common/style/mixin'

.page
  display: flex
  flex-direction: column
  align-items: center
  .nav
    position: fixed
.foods
  margin-top: 60px
  display: flex
  flex-direction: column
  width: 85%
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
        font-weight: bold
        line-height: 24px
        ellipsis(2)
      .price
        font-family: 'PingFang SC'
        font-size: $font-size-medium-x
        font-weight: bold
</style>
