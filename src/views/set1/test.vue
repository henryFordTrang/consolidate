<template>
    <div id="app">
        <canvas id="myCanvas" width="375" height="500"></canvas>
    </div>
</template>
<script>
class ball{
    constructor(color,x,y){
        this.color=color;
        this.x=x;
        this.y=y;
        this.r=40;
    }

    render1(ball){
           var c=document.getElementById("myCanvas");
           var ctx=c.getContext("2d");
            ctx.beginPath();
            ctx.arc(ball.x,ball.y,ball.r,0,2*Math.PI);
            ctx.fillStyle=ball.color;
            ctx.fill();
            ctx.stroke();
    }
}
export default {
    methods:{
        drawBall(){
        var ball0=new ball('yellow',100,100);
        var ball1=new ball('orange',100,210);
        var ball2=new ball('yellowgreen',100,320);
        ball0.render1(ball0);
        ball0.render1(ball1);
        ball0.render1(ball2);

        },
        repeat(){
            var xx='henryFord';
            console.log(xx.repeat(10),xx.includes('r'),xx.padEnd(10,'i'),xx.startsWith('i m'))
        }
    },
    mounted(){
        //this.drawBall()
        this.repeat()
        this.$route.meta.KeepAlive=true;
    }
}
</script>
<style lang="less" scoped>

</style>