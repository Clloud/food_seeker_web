<template>
  <div class="container" v-if="open">
    <div class="header-container">
      <div class="header">
        <div class="iconfont icon-close"
          @click="onClose">&#xe624;
        </div>
        <input type="text"
          v-model="keyword"
          class="input"
          :placeholder="placeholder">
        <div class="iconfont icon-search"
          :class="activated"
          @click="search">&#xe627;
        </div>
      </div>
    </div>
    <div class="search-result">
      <div class="item"
        v-for="(restaurant,index) in restaurants"
        :key="restaurant.id"
        @click="onSelect(index)">
        <div class="left-part">
          <div class="image-wrapper">
            <img :src="imageUrl(restaurant.images)"
              class="image"
              v-if="restaurant.images.length">
          </div>
        </div>
        <div class="right-part">
          <div class="name">{{ restaurant.name }}</div>
          <div class="location">{{ restaurant.location }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import * as types from 'store/mutation-types'
import Search from 'models/search'

export default {
  name: 'AssociateRestaurant',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      placeholder: '商户名称？',
      keyword: '',
      restaurants: []
    }
  },
  computed: {
    activated () {
      return this.keyword.length ? 'activated' : ''
    }
  },
  methods: {
    onClose () {
      this.$emit('close')
    },
    search () {
      if (this.keyword) {
        Search.searchRestaurants(this.keyword).then((data) => {
          this.restaurants = data.items
        })
      }
    },
    onSelect (index) {
      this.$store.commit(types.SET_ASSOCIATE_RESTAURANT, this.restaurants[index])
      this.onClose()
    },
    imageUrl (images) {
      return images.length ? images[0].url : ''
    }
  },
  watch: {
    keyword () {
      if (this.keyword) {
        setTimeout(() => {
          this.search()
        }, 20)
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'
@import '~common/style/mixin'

.container
  display: flex
  flex-direction: column
  align-items: center
  background: #ffffff
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  .header-container
    display: flex
    justify-content: center
    width: 100%
    border-bottom: 1px solid $color-border
    box-shadow: 0 0 5px $color-shadow
    .header
      width: 85%
      height: 60px
      display: flex
      align-items: center
      .icon-close
        font-size: $font-size-medium
        font-weight: bold
        margin-right: 12px
        extend-click()
      .icon-search
        color: #a2a7a8
        font-size: $font-size-large-xx
        font-weight: bold
        extend-click()
      .activated
        color: $color-theme
      .input
        outline: 0
        flex: 1
        font-size: $font-size-large
        text-indent: 10px
        height: 30px
        ellipsis()
        &:focus
          border-bottom: none
  .search-result
    display: flex
    flex-direction: column
    width: 85%
    .item
      position: relative
      display: flex
      width: 100%
      height: 80px
      margin: 12px 0
      box-sizing: border-box
      padding: 15px 0
      border-bottom: 1px solid $color-border
      .left-part
        margin-right: 18px
        .image-wrapper
          width: 75px
          height: 50px
          border-radius: 3px
          background: #eee
          overflow: hidden
          .image
            width: 75px
            height: 50px
      .right-part
        display: flex
        flex-direction: column
        justify-content: space-between
        margin: 3px 0
        .name
          font-weight: bold
        .location
          font-size: $font-size-medium
</style>
