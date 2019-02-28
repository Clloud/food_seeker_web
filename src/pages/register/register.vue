<template>
  <div class="page">
    <register-header :title="title" class="header">
    </register-header>
    <register-input
      label="邮箱"
      v-model="email"
      :value="email"
      :error="emailError">
    </register-input>
    <main-button @confirm="onConfirm">下一步</main-button>
  </div>
</template>

<script type="text/ecmascript-6">
import * as types from 'store/mutation-types'
import MainButton from 'components/main-button/main-button'
import RegisterHeader from 'components/header/header'
import RegisterInput from 'components/input/input'

export default {
  name: 'Register',
  components: {
    MainButton,
    RegisterHeader,
    RegisterInput
  },
  data () {
    return {
      title: '注册开饭',
      email: '',
      emailError: false
    }
  },
  methods: {
    onConfirm () {
      this.axios.get('/user/2')
        .then(function (response) {
          console.log('response')
          console.log(this.$store.state.token)
          console.log(response)
        })
      if (this.checkEmail()) {
        this.$store.commit(types.SET_EMAIL, this.email)
        this.$router.push('/register/confirm')
      } else {
        this.emailError = true
      }
    },
    checkEmail () {
      var reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
      return reg.test(this.email)
    }
  },
  mounted () {
    this.email = this.$store.state.email
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
