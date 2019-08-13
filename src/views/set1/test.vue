<template>
  <external>
    <van-nav-bar
      title="测试"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"/>   
    <scroller>
        <van-button type="info" @click="chop">信息按钮</van-button>
    </scroller>
  </external>
</template>
<script>
export default {
  methods: {
    chop() {
        console.log(JSBridge,'----------------')
        //return;
      //this.$router.replace("/anima");
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

