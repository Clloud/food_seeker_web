<template>
  <div class="container">
    <div class="title" @click="onSelect">关联商户</div>
    <div class="merchant"
      v-if="restaurant">
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
      <div class="iconfont icon-delete" @click="onDelete">&#xe624;</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import * as types from 'store/mutation-types'

export default {
  name: 'Merchant',
  props: {
    restaurant: {
      type: Object,
      default: null
    }
  },
  methods: {
    onDelete () {
      this.$store.commit(types.SET_ASSOSIATE_RESTAURANT, null)
    },
    onSelect () {
      this.$emit('open')
    },
    imageUrl (images) {
      return images.length ? images[0].url : ''
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'

.container
  width: 85%
  .title
    font-size: $font-size-large-x
    color: $color-shadow-d
  .merchant
    position: relative
    display: flex
    background: #fafafa
    border-radius: 5px
    width: 100%
    height: 80px
    margin: 12px 0
    box-sizing: border-box
    padding: 15px
    .icon-delete
      position: absolute
      top: 15px
      right: 15px
      font-size: 12px
      color: $color-shadow-d
    .left-part
      margin-right: 12px
      .image-wrapper
        width: 50px
        height: 50px
        border-radius: 3px
        background: #eee
        overflow: hidden
        .image
          width: 50px
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
