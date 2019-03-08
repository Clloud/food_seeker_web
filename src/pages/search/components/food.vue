<template>
  <block title="菜品" button="查看全部菜品">
    <div class="foods">
    </div>
  </block>
</template>

<script type="text/ecmascript-6">
import Block from './block'
import { mapState } from 'vuex'

export default {
  name: 'FoodBlock',
  components: {
    Block
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['foods'])
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
