<template>
  <div class="page">
    <nav-bar></nav-bar>
    <register-header :title="title" :description="description" class="header">
    </register-header>
    <register-input
      label="昵称"
      v-model="nickname"
      :error="nicknameError">
    </register-input>
    <register-input
      type="password"
      label="密码"
      v-model="password"
      :error="passwordError">
    </register-input>
    <main-button @confirm="onConfirm">完成注册</main-button>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar'
import MainButton from 'components/main-button/main-button'
import RegisterHeader from 'components/header/header'
import RegisterInput from 'components/input/input'
import User from 'models/user'

export default {
  name: 'RegisterConfirm',
  components: {
    NavBar,
    MainButton,
    RegisterHeader,
    RegisterInput
  },
  data () {
    return {
      title: '完善资料',
      description: '补全信息后，即可创建开饭账号',
      nickname: '',
      password: '',
      nicknameError: false,
      passwordError: false
    }
  },
  methods: {
    onConfirm () {
      if (!this.nicknameError && !this.passwordError &&
        this.nickname && this.password) {
        const Email = 100
        User.register(
          this.$store.state.email,
          this.password,
          Email,
          this.nickname
        )
      }
    },
    checkPassword () {
      return this.password !== ''
    },
    checkNickname () {
      return this.nickname !== ''
    }
  },
  watch: {
    nickname (value) {
      if (!this.checkNickname(value)) {
        this.nicknameError = true
        return
      }
      this.nicknameError = false
    },
    password (value) {
      if (!this.checkPassword(value)) {
        this.passwordError = true
        return
      }
      this.passwordError = false
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  display: flex
  flex-direction: column
  align-items: center
  .header
    margin-bottom: 48px
</style>
