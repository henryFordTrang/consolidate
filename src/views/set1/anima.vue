<template>
    <div id="app">
        <input type="button" value="toIndex" @click="access">
    </div>
</template>
<script>
export default {
    methods:{
        access(){
            this.$router.replace('/index')
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

