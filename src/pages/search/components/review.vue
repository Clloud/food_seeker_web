<template>
  <block title="点评" button="查看全部点评">
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
  computed: {
    ...mapState(['reviews'])
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
