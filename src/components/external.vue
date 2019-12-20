<template>
    <div class="external">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'external',
}
</script>

<style lang="less" scoped>
.external{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    flex-flow:column;
}
</style>
