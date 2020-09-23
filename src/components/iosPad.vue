<template>
    <div id="iphone" class="ios-status-bar" v-show="show" :style="{ height }"></div>
</template>
<script>
export default {
  name: 'iosPad',
  data () {
    return {
      show: false,
      height: 0
    }
  },
  created () {
    const u = navigator.userAgent
    if (!(/iphone|ipad|ipod/i.test(u))) return false
    this.show = true
    this.height = process.env.NODE_ENV === 'development' ? '20px' : (window.screen.height - window.screen.availHeight) + 'px'
  }
}
</script>
<style lang="less">
.ios-status-bar {
    z-index: 1000;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: transparent;
    overflow: hidden;
  }
</style>
