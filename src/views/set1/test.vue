<template>
  <external>
    <van-nav-bar
      title="测试"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <scroller></scroller>
  </external>
</template>
<script>
export default {
  methods: {
    chop() {
      this.$router.replace("/anima");
    },
    onClickLeft(){

    },
    onClickRight(){
        
    }
  }
};
</script>
<style scoped>
</style>

