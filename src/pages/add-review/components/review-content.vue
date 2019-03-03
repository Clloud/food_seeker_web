<template>
  <div class="container">
    <!-- 原生textarea控价，高度无法自适应 -->
    <!-- <textarea class="textarea" :placeholder="placeholder" v-model="value">
    </textarea> -->
    <div class="placeholder" v-if="!value" @click="onClick">{{ placeholder }}</div>
    <div class="textarea"
      contenteditable="true"
      @input="onInput($event)"
      ref="textarea">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'ReviewContent',
  data () {
    return {
      placeholder: '分享您的用餐体验',
      value: ''
    }
  },
  methods: {
    onClick () {
      // 获取输入框焦点
      this.$refs.textarea.focus()
    },
    onInput (event) {
      this.value = event.target.innerText
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'

.container
  margin-top: 12px
  width: 85%
  .textarea
    width: 100%
    min-height: 30vh
    outline: 0
    word-wrap: break-word
    overflow-x: hidden
    overflow-y: auto
    font-family: 'QiHei'
    font-size: $font-size-medium-x
    line-height: 26px
    letter-spacing: 0.5px
    color: #000
    border-bottom: 1px solid red
  .placeholder
    font-size: $font-size-large
    letter-spacing: 0.5px
    color: $color-shadow-d
  // .textarea
  //   width: 100%
  //   height: 40vh
  //   border: none
  //   border-bottom: 1px solid #999
  //   outline: 0 none;
  //   font-size: $font-size-medium-x
  //   font-family: 'QiHei'
  //   letter-spacing: 0.5px
  //   line-height: 26px
  // textarea::-webkit-input-placeholder
  //   font-size: $font-size-large
  //   letter-spacing: 0.5px
  //   color: $color-shadow-d
</style>
