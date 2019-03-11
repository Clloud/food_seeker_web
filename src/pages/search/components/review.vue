<template>
  <block title="点评"
    button="查看更多点评"
    v-if="reviews.length"
    @more="$emit('more')"
    :showMore="showMore">
    <div class="reviews">
      <review v-for="review in reviews"
        :key="review.id"
        :review="review">
      </review>
    </div>
  </block>
</template>

<script type="text/ecmascript-6">
import Block from './block'
import Review from 'components/review/review'
import { mapState } from 'vuex'

export default {
  name: 'ReviewBlock',
  components: {
    Block,
    Review
  },
  props: {
    showMore: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapState(['reviews'])
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
