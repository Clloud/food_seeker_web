<template>
  <div class="page">
    <notification-header></notification-header>
    <div class="no-content">还没有消息呢</div>
  </div>
</template>

<script type="text/ecmascript-6">
import NotificationHeader from './components/header'

export default {
  name: 'Notification',
  components: {
    NotificationHeader
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'

.page
  display: flex
  flex-direction: column
  align-items: center
  .no-content
    margin-top: 24px
    color: $color-text-l
    width: 85%
</style>
