<template>
  <div class="container">
    <div v-if="fullScreen" class="full-screen">
      <div class="header-container">
        <div class="header">
          <div class="iconfont icon-close"
            @click="onClose">&#xe612;
          </div>
          <input type="text"
            v-model="keyword"
            class="input"
            :placeholder="placeholder">
          <div class="iconfont icon-search"
            :class="activated"
            @click="onSearch">&#xe627;
          </div>
        </div>
      </div>
      <div class="history-container" v-if="showHistory">
        <div class="history">
          <div class="title">最近搜索</div>
          <div class="item"
            v-for="(item, index) in searchHistory"
            :key="index">
            <div class="text" @click="onHistorySearch(item)">{{ item }}</div>
            <div class="iconfont icon-delete"
              @click="onDelete(index)">&#xe624;</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="box" @click="onBoxClick">
      <div class="iconfont icon-search">&#xe627;</div>
      <div class="text">{{ keyword ? keyword : recommend }}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import * as types from 'store/mutation-types'

export default {
  name: 'SearchBox',
  data () {
    return {
      keyword: '',
      fullScreen: false,
      recommend: '搜索牛肉粉试试',
      placeholder: '想吃什么？',
      searchHistory: this.$store.state.searchHistory
    }
  },
  computed: {
    activated () {
      return this.keyword.length ? 'activated' : ''
    },
    showHistory () {
      return this.searchHistory.length
    }
  },
  methods: {
    onBoxClick () {
      this.fullScreen = true
    },
    onClose () {
      this.fullScreen = false
    },
    onSearch () {
      if (this.keyword) {
        this.onClose()
        this._addHistory()
        this.$emit('search', this.keyword)
      }
    },
    onDelete (index) {
      this._deleteHistory(index)
    },
    onHistorySearch (item) {
      this.keyword = item
      this.onSearch()
    },
    _deleteHistory (index) {
      this.searchHistory.splice(index, 1)
      this.$store.commit(types.SET_SEARCH_HISTORY, this.searchHistory)
    },
    _addHistory () {
      // 去除重复的搜索历史
      let firstIndex = this.searchHistory.indexOf(this.keyword)
      if (firstIndex !== -1) {
        this.searchHistory.splice(firstIndex, 1)
      }
      this.searchHistory.unshift(this.keyword)
      this.$store.commit(types.SET_SEARCH_HISTORY, this.searchHistory)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/style/variable'
@import '~common/style/mixin'

.container
  width: 100%
  display: flex
  justify-content: center
  position: fixed
  background: #fff
  .box
    width: 85%
    display: flex
    align-items: center
    height: 50px
    border: 1px solid $color-border
    border-radius: 5px
    box-shadow: 0 0 5px $color-shadow
    margin-top: 16px
    color: #a6a6a6
    box-sizing: border-box
    padding: 0 16px
    .icon-search
      font-size: $font-size-large-x
      margin: 0 18px 0 0
    .text
      font-size: $font-size-medium-x
      ellipsis()
  .full-screen
    display: flex
    flex-direction: column
    position: fixed
    z-index: 99
    top: 0
    bottom: 0
    left: 0
    right: 0
    background #fff
    .header-container
      display: flex
      justify-content: center
      width: 100%
      border-bottom: 1px solid $color-border
      box-shadow: 0 0 5px $color-shadow
      .header
        width: 85%
        height: 60px
        display: flex
        align-items: center
        .icon-close
          font-size: $font-size-large-x
          font-weight: bold
          margin-right: 12px
          padding-top: 2px
          extend-click()
        .icon-search
          color: #a2a7a8
          font-size: $font-size-large-xx
          font-weight: bold
          extend-click()
        .activated
          color: $color-theme
        .input
          outline: 0
          flex: 1
          font-size: $font-size-large
          text-indent: 10px
          height: 30px
          ellipsis()
          &:focus
            border-bottom: none
    .history-container
      width: 100%
      display: flex
      justify-content: center
      margin-top: 24px
      .history
        width: 85%
        display: flex
        flex-direction: column
        .title
          font-size: $font-size-medium
          font-weight: bold
        .item
          display: flex
          align-items: center
          justify-content: space-between
          height: 60px
          border-bottom: 1px solid $color-border
          .text
            flex: 1
            ellipsis()
            extend-click()
          .icon-delete
            margin-left: 16px
            color: #a2a7a8
            font-size: $font-size-small
            extend-click()
</style>
