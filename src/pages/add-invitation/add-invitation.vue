<template>
  <div class="page">
    <nav-bar title="约饭"
      button="发布"
      @submit="onSubmit"
      :buttonActivated="buttonActivated">
    </nav-bar>
    <invit-time></invit-time>
    <merchant :restaurant="restaurant" @open="open" title="约饭地点"></merchant>
    <associate-restaurant :open="activated" @close="close"></associate-restaurant>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/nav-bar/nav-bar'
import InvitTime from './components/invit-time'
import AssociateRestaurant from '../add-review/components/associate-restaurant'
import Merchant from '../add-review/components/merchant'
import { mapState } from 'vuex'

export default {
  name: 'AddInvitation',
  components: {
    NavBar,
    InvitTime,
    AssociateRestaurant,
    Merchant
  },
  data () {
    return {
      buttonActivated: false,
      activated: false
    }
  },
  computed: {
    ...mapState({
      'restaurant': 'associateRestaurant'
    })
  },
  methods: {
    onSubmit () {},
    close () {
      this.activated = false
    },
    open () {
      this.activated = true
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page
  display: flex
  flex-direction: column
  align-items: center
</style>
