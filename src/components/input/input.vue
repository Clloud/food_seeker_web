<template>
  <div class="container">
    <div class="label">{{ label }}</div>
    <input :type="type"
      class="input"
      :class="{'alert': error}"
      :value="value"
      @input="updateValue">
    <div class="messages" v-if="messages.length">
      <div class="message" v-for="(message, index) in messages"
      :key="index">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    messages: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    updateValue (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable.styl'

.container
  display: flex
  flex-direction: column
  width: 85%
  max-width: 318.75px
  margin-bottom: 27px
  .label
    font-size: $font-size-medium
  .input
    font-size: $font-size-large
    color: $color-text
    border-bottom: 1.5px solid $color-light
    height: 42px
    outline: 0
    &:focus
      border-bottom: 3px solid $color-theme
  .alert
    border-bottom: 3px solid $color-alert
  .messages
    display: flex
    flex-direction: column
    margin-top: 8px
    .message
      font-size: $font-size-medium
      color: $color-alert
      line-height: 24px
</style>
