<template>
  <div class="page">
    <register-header :title="title" :description="description" class="header">
    </register-header>
    <register-input label="用户名" v-model="username"></register-input>
    <register-input type="password" label="密码" v-model="password"></register-input>
    <main-button @confirm="onConfirm">完成注册</main-button>
  </div>
</template>

<script type="text/ecmascript-6">
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
      title: '完善资料',
      description: '补全信息后，即可创建开饭账号',
      username: '',
      password: ''
    }
  },
  methods: {
    onConfirm () {
      console.log(this.username)
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
