<template>
    <div id="app">
        <!-- <input type="button" value="选文件" class="dddd" @click="access"> -->
        <!-- <table>
            <thead>
                <tr>
                    <td>head1</td>
                    <td>head2</td>
                    <td>head3</td>
                    <td>head4</td>
                    <td>head5</td>
                    <td>head6</td>
                    <td>head7</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in 5" :key="index">
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                </tr>
            </tbody>
        </table> -->
        <van-uploader :after-read="afterRead" />
        <!-- <input type="button" value="toIndex" class="dddd" @click="acquire"> -->
    </div>

</template>
<script>
export default {
    data(){
        return{
            testing:{},
        }
    },
    methods:{
        afterRead(file){

        },
        access(){
            this.testing.param1=1;
            this.testing.param2=2;
            localStorage.testing=JSON.stringify(this.testing);

            // ap.redirectTo({
            //     url:'http://www.baidu.com'
            // })
            //window.location.href='http://www.baidu.com'      
            //this.$router.replace('/index');
        },
        acquire(){
            console.log(localStorage.testing)
            //var acquire=JSON.parse(localStorage.testing);
            console.log(JSON.parse(localStorage.testing).param1)
        }
    }
}
</script>
<style scoped>
#app{
    height:100%;
    width:100%;
    overflow:hidden;
    background-color:yellowgreen;
}
table{
     table-layout:fixed;
    background-color:orange;
    display:inline-block;
    width:721px;
    overflow-x:scroll;
}
    td{
        display:inline-block;
        width:100px;
        height:120px;
    }
    tbody{
        height:500px;
        display:inline-block;
        overflow-y:scroll;
    }
</style>

