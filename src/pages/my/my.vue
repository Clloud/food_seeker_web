<template>
  <div class="page">
    <my-header :title="title" :description="description" class="header">
    </my-header>
  </div>
</template>

<script type="text/ecmascript-6">
import MyHeader from 'components/header/header'

export default {
  name: 'My',
  components: {
    MyHeader
  },
  data () {
    return {
      title: '我的',
      description: '登录开饭，体验更多功能'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  display: flex
  flex-direction: column
  align-items: center
  margin-top: 30px
</style>
