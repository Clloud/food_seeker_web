<template>
  <div class="container">
    <textarea class="textarea" :placeholder="placeholder">
    </textarea>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'ReviewContent',
  data () {
    return {
      placeholder: '分享您的用餐体验'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.container
  margin-top: 12px
  width: 85%
  .textarea
    width: 100%
    height: 100px
    border: none
    background: #cccccc
    outline: 0 none;
</style>
