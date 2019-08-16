<template>
    <div id="app">
        <input type="button" value="toIndex" class="dddd" @click="access">
    </div>
</template>
<script>
export default {
    methods:{
        access(){
            this.$router.replace('/index');
          cxMethod.scan()
        }
    }
}
</script>
<style scoped>
#app{
    height:100%;
    width:100%;
    background-color:yellowgreen;
}
</style>

