<template>
  <div class="page">
    <nav-bar></nav-bar>
    <register-header :title="title" :description="description" class="header">
    </register-header>
    <register-input
      label="昵称"
      v-model="nickname"
      :error="nicknameError"
      :messages="nicknameMessages">
    </register-input>
    <register-input
      type="password"
      label="密码"
      v-model="password"
      :error="passwordError"
      :messages="passwordMessages">
    </register-input>
    <main-button @confirm="onConfirm">完成注册</main-button>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar'
import MainButton from 'components/main-button/main-button'
import RegisterHeader from 'components/header/header'
import RegisterInput from 'components/input/input'
// import User from 'models/user'

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
      passwordError: false,
      nicknameMessages: [],
      passwordMessages: []
    }
  },
  methods: {
    onConfirm () {
      if (!this.nicknameError && !this.passwordError &&
        this.nickname && this.password) {
        const Email = 100
        // User.register(
        //   this.$store.state.email,
        //   this.password,
        //   Email,
        //   this.nickname
        // )
        this.axios.post('/user', {
          account: this.$store.state.email,
          secret: this.password,
          type: Email,
          nickname: this.nickname
        })
          .then((data) => {
            this.$router.replace('/login')
          })
          .catch((error) => {
            if (error.message.secret) {
              this.passwordError = true
              this.passwordMessages = ['至少包含6个字符']
            }
            if (error.message.nickname) {
              this.nicknameError = true
              this.nicknameMessages = ['至少包含2个字符', '最多包含24个字符']
            }
          })
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
