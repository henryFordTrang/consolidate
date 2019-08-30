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
    <scroller>
      <div class="container-fluid">
        <div id="left_div">
          <div id="left_div1">
            <table id="left_table1" class="table table-bordered">
              <tr>
                <th>不动</th>
              </tr>
            </table>
          </div>
          <div id="left_div2">
            <table id="left_table2" class="table table-bordered"></table>
          </div>
        </div>
        <div id="right_div">
          <div id="right_div1">
            <div id="right_divx">
              <table id="right_table1" class="table table-bordered">
                <tr>
                  <th>表头</th>
                  <th>表头</th>
                  <th>表头</th>
                  <th>表头</th>
                  <th>表头</th>
                  <th>表头</th>
                  <th>表头</th>
                  <th>表头</th>
                  <th>表头</th>
                  <th>表头</th>
                </tr>
              </table>
            </div>
          </div>
          <div id="right_div2" @touchmove.stop="getScrollParam($event)">
            <table id="right_table2" class="table table-bordered"></table>
          </div>
        </div>
      </div>
    </scroller>
  </external>
</template>
<script>
export default {
  data() {
    return {
      searchType: "",
      searchValue: "",
      startDate: "",
      startDate: new Date().Format("yyyy-MM-dd"),
      endDate: new Date().Format("yyyy-MM-dd")
    };
  },
  methods: {
    loadInfo() {
      var _this = this;
      var url =
        _this.$util.axiosUrl() +
        "/api/phoneKcb/queryKcb?orgId=" +
        localStorage.orgId +
        "&searchType=1&searchValue=1101&startDate=" +
        _this.startDate +
        "&endDate=" +
        _this.endDate;
      _this.$axios.get(url).then(rsp => {
        console.log(rsp);
      });
    },
    getScrollParam(e) {
      //console.log(e)
    },
    onClickLeft() {
      cxMethod.test();
      cxMethod.exit();
    },
    onClickRight() {}
  },
  mounted() {
    var _this = this;
    _this.loadInfo();
    var contentH =
      $(window).height() -
      $(".van-nav-bar").height() -
      $(".van-nav-bar").offset().top +
      "px";
    for (var i = 0; i < 24; i++) {
      $("#left_table2").append("<tr><th>首列</th></tr>");
      $("#right_table2").append(
        "<tr><td>" +
          i +
          "</td><td>" +
          i +
          "</td><td>" +
          i +
          "</td><td>" +
          i +
          "</td><td>" +
          i +
          "</td><td>" +
          i +
          "</td><td>" +
          i +
          "</td><td>" +
          i +
          "</td><td>" +
          i +
          "</td><td>" +
          i +
          "</td></tr>"
      );
    }
    $(".page-scroll").css("height", contentH);
    var right_div2 = document.getElementById("right_div2");
    right_div2.onscroll = function() {
      console.log(888)
      var right_div2_top = this.scrollTop;
      var right_div2_left = this.scrollLeft;
      document.getElementById("left_div2").scrollTop = right_div2_top;
      document.getElementById("right_div1").scrollLeft = right_div2_left;
    };
  }
};
</script>
<style scoped>
.page-scroll /deep/ .page-scroll__content {
  overflow: hidden;
}
/* .wrapper{
  height:100%;
}
.wrapper .left{
  width:49px;
  height:621px;
  display:inline-block;
  float:left;
}
.wrapper .left .leftUp{
  width:49px;
  height:62px;
  overflow:hidden;
}
.wrapper .left .leftLow{
  width:49px;
  height:1000px;
  background-color:orange;
  overflow-y:auto;
}
.wrapper .right{
  width:326px;
  height:621px;
  display:inline-block;
  float:left;
}
.wrapper .right .rightUp{
  width:500px;
  height:62px;
  overflow:hidden;
}
.wrapper .right .rightLow{
  width:500px;
  height:1000px;
  overflow:auto;
  background-color:yellowgreen;
} */
#left_div {
  width: 49px;
  float: left;
}
#left_div1 {
  width: 100%;
}
#left_div2 {
  width: 100%;
  height: 400px;
  overflow: hidden;
}
#left_table1 th {
  background: #e9f8ff;
  text-align: center;
}
#left_table2 th {
  text-align: center;
}

#right_div {
  float: left;
  width: 306px;
}
#right_div1 {
  width: 100%;
  overflow: hidden;
}
#right_divx {
  width: 900px;
}
#right_div2 {
  width: 100%;
  height: 400px;
  overflow: auto;
}
#right_table1 {
  width: 880px;
}
#right_table2 {
  /**width和max-width一起写，手机浏览器打开也能固定长度**/
  width: 880px;
  max-width: 880px;
  white-space: nowrap;
}
#right_table1 th {
  background: #e9f8ff;
  text-align: center;
  width: 10%;
}
#right_table2 td {
  width: 10%;
  text-align: center;
}
</style>

