<template>
  <div class="contianer" @click="selectTime">
    <div class="title">时间</div>
    <div class="time"></div>
  </div>
</template>

<script>
export default {
  name: 'InvitTime',
  data () {
    return {
    }
  },
  methods: {
    selectTime () {}
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.contianer
  width: 85%
  margin: 8px 0
  .title
    font-size: 20px
    color: #aaa
    width: 70px
</style>
