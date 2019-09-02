<template>
  <external>
    <iosPad></iosPad>
    <van-nav-bar
      title="测试"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="weekSwit">
      <div class="weekSp ib fl">
        <a @click="preW" class="left ib fl" href="javascript:">
          <img
            src="static/img/album/icon_gray_arrow_left@2x.png"
            style="height: 14px;width: 8px;margin-top: 18px;"
            alt
          />
        </a>
        <div class="mid ib fl">{{weekSpan}}</div>
        <a @click="nexW" class="right ib fl" href="javascript:">
          <img
            src="static/img/album/icon_gray_arrow_right@2x.png"
            style="height: 14px;width: 8px;margin-top: 18px;"
            alt
          />
        </a>
      </div>
      <a @click="liveW" class="reverse1 ib fl" href="javascript:">
        <div class="reverse">
          <div class="left ib fl">
            <img
              src="static/img/album/icon_blue_arrow_left_backweek@2x.png"
              style="height: 20px;width: 20px;margin-top: 15px;"
              alt
            />
          </div>
          <div class="right ib fl">返回本周</div>
        </div>
      </a>
    </div>
    <scroller>
      <div class="wrapper">
        <div class="left">
          <div class="leftUp">{{curMonth}}月</div>
          <div class="leftLow" ref="leftLow" id="leftLow">
            <div class="lli">
              <table>
                <tbody>
                  <tr v-for="(item,index) in series" :key="index">
                    <td class="firstCol" v-if="item.jcdm!='nap'">
                      <div class="subWra">
                        <div class="class">{{item.jcdm}}</div>
                        <div class="time">{{item.jcskkssj.substring(0,5)}}</div>
                      </div>
                    </td>
                    <td class="firstCol nap" v-else>
                      <div class="subWra nap">
                        <div class="class nap">{{item.jcmc}}</div>
                        <!-- <div class="time nap">{{item.jcskkssj.substring(0,5)}}</div> -->
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="rightUp" ref="rightUp" id="rightUp">
            <div class="thWra">
              <table class="tableDate">
                <thead>
                  <tr>
                    <td class="thweek">
                      <div class="wkSeries">周一</div>
                      <div class="date">6.10</div>
                    </td>
                    <td class="thweek">
                      <div class="wkSeries">周二</div>
                      <div class="date">6.10</div>
                    </td>
                    <td class="thweek">
                      <div class="wkSeries">周三</div>
                      <div class="date">6.10</div>
                    </td>
                    <td class="thweek">
                      <div class="wkSeries">周四</div>
                      <div class="date">6.10</div>
                    </td>
                    <td class="thweek">
                      <div class="wkSeries">周五</div>
                      <div class="date">6.10</div>
                    </td>
                    <td class="thweek">
                      <div class="wkSeries">周六</div>
                      <div class="date">6.10</div>
                    </td>
                    <td class="thweek">
                      <div class="wkSeries">周日</div>
                      <div class="date">6.10</div>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <div class="rightLow" @touchmove.stop id="rightLow">
            <div class="courseWra">
              <table class="courseTable">
                <tbody class="courseBody">
                  <tr
                    class="courseRow"
                    v-for="(item,index) in series"
                    :key="index"
                    :class="item.jcdm=='nap'?'dspFlex':''"
                  >
                    <!-- 星期一 -->
                    <!-- <td class="courseTd" :class="item.jcdm=='nap'?'courseNap':''" :style="monSet[index]&&monSet[index].jc?'background-color:'+colorM.get(monSet[index].kcdm):''"> -->
                    <td class="courseTd" :class="computCc(item.jcdm,monSet[index])" :rowspan="monSet[index]&&monSet[index].jc?computRs(monSet[index]):1" :style="monSet[index]&&monSet[index].jc?'background-color:'+colorM.get(monSet[index].kcdm):''">
                      <div class="courseInnerWra" v-if="item.jcdm!='nap'">
                        <div class="courseName">
                          <!-- <span class="couseContent">{{monSet[index+1>napIndex?index-1:index]&&monSet[index+1>napIndex?index-1:index].kcmc?monSet[index+1>napIndex?index-1:index].kcmc:index}}1111</span> -->
                          <span class="couseContent">{{monSet[index]&&monSet[index].jc?monSet[index].kcmc:''}}</span>
                        </div>
                        <div class="addition">
                          <div class="location">
                            <div class="icon">
                              <img
                                src="static/img/album/icon_location_curriculum@2x.png"
                                alt
                                class="img"
                              />
                            </div>
                            <div class="spec">{{monSet[index]&&monSet[index].jc?monSet[index].skbjmc:''}}</div>
                          </div>
                          <div class="location">
                            <div class="icon">
                              <img
                                src="static/img/album/icon_teacher_curriculum@2x.png"
                                alt
                                class="img1"
                              />
                            </div>
                            <div class="spec">{{monSet[index]&&monSet[index].jc?monSet[index].skjsxm:''}}</div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <!-- 星期二 -->
                    <td class="courseTd" :class="computCc(item.jcdm,tueSet[index])" :rowspan="tueSet[index]&&tueSet[index].jc?computRs(tueSet[index]):1" :style="tueSet[index]&&tueSet[index].jc?'background-color:'+colorM.get(tueSet[index].kcdm):''">
                      <div class="courseInnerWra" v-if="item.jcdm!='nap'">
                        <div class="courseName">
                          <!-- <span class="couseContent">{{tueSet[index+1>napIndex?index-1:index]&&tueSet[index+1>napIndex?index-1:index].kcmc?tueSet[index+1>napIndex?index-1:index].kcmc:''}}</span> -->
                          <span class="couseContent">{{tueSet[index]&&tueSet[index].jc?tueSet[index].kcmc:''}}</span>
                        </div>
                        <div class="addition">
                          <div class="location">
                            <div class="icon">
                              <img
                                src="static/img/album/icon_location_curriculum@2x.png"
                                alt
                                class="img"
                              />
                            </div>
                            <div class="spec">{{tueSet[index]&&tueSet[index].jc?tueSet[index].skbjmc:''}}</div>
                          </div>
                          <div class="location">
                            <div class="icon">
                              <img
                                src="static/img/album/icon_teacher_curriculum@2x.png"
                                alt
                                class="img1"
                              />
                            </div>
                            <div class="spec">{{tueSet[index]&&tueSet[index].jc?tueSet[index].skjsxm:''}}</div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <!-- 星期三 -->
                    <td class="courseTd" :class="computCc(item.jcdm,wenSet[index])" :rowspan="wenSet[index]&&wenSet[index].jc?computRs(wenSet[index]):1" :style="wenSet[index]&&wenSet[index].jc?'background-color:'+colorM.get(wenSet[index].kcdm):''">
                      <div class="courseInnerWra" v-if="item.jcdm!='nap'">
                        <div class="courseName">
                          <span class="couseContent">{{wenSet[index]&&tueSet[index].jc?wenSet[index].kcmc:''}}</span>
                        </div>
                        <div class="addition">
                          <div class="location">
                            <div class="icon">
                              <img
                                src="static/img/album/icon_location_curriculum@2x.png"
                                alt
                                class="img"
                              />
                            </div>
                            <div class="spec">{{wenSet[index]&&tueSet[index].jc?wenSet[index].skbjmc:''}}</div>
                          </div>
                          <div class="location">
                            <div class="icon">
                              <img
                                src="static/img/album/icon_teacher_curriculum@2x.png"
                                alt
                                class="img1"
                              />
                            </div>
                            <div class="spec">{{wenSet[index]&&tueSet[index].jc?wenSet[index].skjsxm:''}}</div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <!-- 星期四 -->
                    <td class="courseTd" :class="computCc(item.jcdm,thiSet[index])" :rowspan="thiSet[index]&&thiSet[index].jc?computRs(thiSet[index]):1" :style="thiSet[index]&&thiSet[index].jc?'background-color:'+colorM.get(thiSet[index].kcdm):''">
                      <div class="courseInnerWra" v-if="item.jcdm!='nap'">
                        <div class="courseName">
                          <span class="couseContent">{{thiSet[index]&&tueSet[index].jc?thiSet[index].kcmc:''}}</span>
                        </div>
                        <div class="addition">
                          <div class="location">
                            <div class="icon">
                              <img
                                src="static/img/album/icon_location_curriculum@2x.png"
                                alt
                                class="img"
                              />
                            </div>
                            <div class="spec">{{thiSet[index]&&tueSet[index].jc?thiSet[index].skbjmc:''}}</div>
                          </div>
                          <div class="location">
                            <div class="icon">
                              <img
                                src="static/img/album/icon_teacher_curriculum@2x.png"
                                alt
                                class="img1"
                              />
                            </div>
                            <div class="spec">{{thiSet[index]&&tueSet[index].jc?thiSet[index].skjsxm:''}}</div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <!-- 星期五 -->
                    <td class="courseTd" :class="computCc(item.jcdm,friSet[index])" :rowspan="friSet[index]&&friSet[index].jc?computRs(friSet[index]):1" :style="friSet[index]&&friSet[index].jc?'background-color:'+colorM.get(friSet[index].kcdm):''">
                      <div class="courseInnerWra" v-if="item.jcdm!='nap'">
                        <div class="courseName">
                          <span class="couseContent">{{friSet[index]&&friSet[index].jc?friSet[index].kcmc:''}}</span>
                        </div>
                        <div class="addition">
                          <div class="location">
                            <div class="icon">
                              <img
                                src="static/img/album/icon_location_curriculum@2x.png"
                                alt
                                class="img"
                              />
                            </div>
                            <div class="spec">{{friSet[index]&&friSet[index].jc?friSet[index].skbjmc:''}}</div>
                          </div>
                          <div class="location">
                            <div class="icon">
                              <img
                                src="static/img/album/icon_teacher_curriculum@2x.png"
                                alt
                                class="img1"
                              />
                            </div>
                            <div class="spec">{{friSet[index]&&friSet[index].jc?friSet[index].skjsxm:''}}</div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <!-- 星期六 -->
                    <td class="courseTd" :class="computCc(item.jcdm,satSet[index])" :rowspan="satSet[index]&&satSet[index].jc?computRs(satSet[index]):1" :style="satSet[index]&&satSet[index].jc?'background-color:'+colorM.get(satSet[index].kcdm):''">
                      <div class="courseInnerWra" v-if="item.jcdm!='nap'&&satSet[index]&&satSet[index].jc">
                        <div class="courseName">
                          <span class="couseContent">{{satSet[index]&&satSet[index].jc?satSet[index].kcmc:''}}</span>
                        </div>
                        <div class="addition">
                          <div class="location">
                            <div class="icon">
                              <img
                                src="static/img/album/icon_location_curriculum@2x.png"
                                alt
                                class="img"
                              />
                            </div>
                            <div class="spec">{{satSet[index]&&satSet[index].jc?satSet[index].skbjmc:''}}</div>
                          </div>
                          <div class="location">
                            <div class="icon">
                              <img
                                src="static/img/album/icon_teacher_curriculum@2x.png"
                                alt
                                class="img1"
                              />
                            </div>
                            <div class="spec">{{satSet[index]&&satSet[index].jc?satSet[index].skjsxm:''}}</div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <!-- 星期天 -->
                    <td class="courseTd" :class="computCc(item.jcdm,sunSet[index])" :rowspan="sunSet[index]&&sunSet[index].jc?computRs(sunSet[index]):1" :style="sunSet[index]&&sunSet[index].jc?'background-color:'+colorM.get(sunSet[index].kcdm):''">
                      <div class="courseInnerWra" v-if="item.jcdm!='nap'&&sunSet[index]&&sunSet[index].jc">
                        <div class="courseName">
                          <span class="couseContent">{{sunSet[index]&&sunSet[index].jc?sunSet[index].kcmc:''}}</span>
                        </div>
                        <div class="addition">
                          <div class="location">
                            <div class="icon">
                              <img
                                src="static/img/album/icon_location_curriculum@2x.png"
                                alt
                                class="img"
                              />
                            </div>
                            <div class="spec">{{sunSet[index]&&sunSet[index].jc?sunSet[index].skbjmc:''}}</div>
                          </div>
                          <div class="location">
                            <div class="icon">
                              <img
                                src="static/img/album/icon_teacher_curriculum@2x.png"
                                alt
                                class="img1"
                              />
                            </div>
                            <div class="spec">{{sunSet[index]&&sunSet[index].jc?sunSet[index].skjsxm:''}}</div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
      weekSpan: "",
      weekShift: 0,
      curMonth: "",
      startDate: new Date().Format("yyyy-MM-dd"),
      endDate: new Date().Format("yyyy-MM-dd"),
      series: [], //节次集合
      courseList: [], //课程集合
      napIndex: 4, //午休节次
      napObj: {},
      monSet: [],
      tueSet: [],
      wenSet: [],
      thiSet: [],
      friSet: [],
      satSet: [],
      sunSet: [],
      colorM: new Map(),
      colorSet: [
          "#FF985C",
          "#33ADFF",
          "#29CCAB",
          "#BA7AF5",
          "#FA6482",
          "#7ACC33",
          "#E6B82E",
          "#F57AF4",
          "#3DC7CC",
          "#77FFEE",
          "#CCDDFF",
          "#9999FF",
          "#D1BBFF",
          "#9955FF",
          "#FFB3FF",
          "#D28EFF",
          "#FFB7DD",
          "#FF44AA",
          "#FF8888",
          "#FF7744",
          "#FFBB66",
          "#FFFF33",
          "#DDFF77",
          "#77FF00",
          "#99FF99",
          "#77FFEE",
          "#CCDDFF",
          "#9999FF",
          "#D1BBFF",
          "#9955FF",
          "#FFB3FF",
          "#D28EFF"
        ],//颜色集合
    };
  },
  methods: {
    //加载课程信息
    loadCourse() {
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
        if (rsp.data.code == "0") {
          //code should equal to 0
          if (rsp.data.jcInfo.code != "0") {
            //length should more than 0
            //if (rsp.data.jcInfo.data && rsp.data.jcInfo.data.length > 0) {
              var temp = [];
              var temp1=[];
              temp = rsp.data.jcInfo.data;
              var testParam='[{"jcdm":1,"org_id":1,"sjlb":"冬令制","jcskkssj":"08:00:00","jcskjssj":"08:45:00","deltag":false,"remark":"1","id":126,"jcmc":"第一节"},{"jcdm":2,"org_id":1,"sjlb":"冬令制","jcskkssj":"09:00:00","jcskjssj":"09:45:00","deltag":false,"remark":"2","id":127,"jcmc":"第二节"},{"jcdm":3,"org_id":1,"sjlb":"冬令制","jcskkssj":"10:00:00","jcskjssj":"10:45:00","deltag":false,"remark":"3","id":128,"jcmc":"第三节"},{"jcdm":4,"org_id":1,"sjlb":"冬令制","jcskkssj":"11:00:00","jcskjssj":"12:00:00","deltag":false,"remark":"4","id":129,"jcmc":"第四节"},{"jcdm":5,"org_id":1,"sjlb":"冬令制","jcskkssj":"14:00:00","jcskjssj":"14:45:00","deltag":false,"remark":"5","id":130,"jcmc":"第五节"},{"jcdm":6,"org_id":1,"sjlb":"冬令制","jcskkssj":"15:00:00","jcskjssj":"15:45:00","deltag":false,"remark":"6","id":131,"jcmc":"第六节"},{"jcdm":7,"org_id":1,"sjlb":"冬令制","jcskkssj":"16:00:00","jcskjssj":"16:45:00","deltag":false,"remark":"7","id":132,"jcmc":"第七节"},{"jcdm":8,"org_id":1,"sjlb":"冬令制","jcskkssj":"17:00:00","jcskjssj":"17:45:00","deltag":false,"remark":"8","id":133,"jcmc":"第八节"}]'
              temp=$.parseJSON(testParam);
              temp1=$.parseJSON(testParam);
              //初始化课程
              _this.monSet=[];
              _this.tueSet=[];
              _this.wenSet=[];
              _this.thiSet=[];
              _this.friSet=[];
              _this.satSet=[];
              _this.sunSet=[];
              for (var j = 0; j < temp1.length + 1; j++) {
                var unit = {};
                if (j == _this.napIndex) {               
                  //午休
                  unit = Object.assign({
                    skcdmc: "",
                    skrq: "",
                    kcdm: "nap",
                    skjs: "",
                    skbj: "",
                    skjsxm: "",
                    skbjmc: "",
                    jc: "",
                    jxrwid: "",
                    kcmc: "",
                    skcddm: "",
                    conceal: false,
                    expire: false
                  });
                } else if (j < _this.napIndex) {
                  //早上
                  unit = Object.assign({
                    skcdmc: "",
                    skrq: "",
                    kcdm: "",
                    skjs: "",
                    skbj: "",
                    skjsxm: "",
                    skbjmc: "",
                    jc: j + 1,
                    jxrwid: "",
                    kcmc: "",
                    skcddm: "",
                    conceal: false,
                    expire: false
                  });
                } else {
                  unit = Object.assign({
                    //下午
                    skcdmc: "",
                    skrq: "",
                    kcdm: "",
                    skjs: "",
                    skbj: "",
                    skjsxm: "",
                    skbjmc: "",
                    jc: j,
                    jxrwid: "",
                    kcmc: "",
                    skcddm: "",
                    conceal: false,
                    expire: false
                  });
                }
                _this.monSet.push(unit);
                _this.tueSet.push(unit);
                _this.wenSet.push(unit);
                _this.thiSet.push(unit);
                _this.friSet.push(unit);
                _this.satSet.push(unit);
                _this.sunSet.push(unit);
              }
              _this.napObj = Object.assign({
                jcdm: "nap",
                org_id: 1,
                sjlb: 1,
                jcskkssj: "",
                jcskjssj: "",
                deltag: false,
                remark: 1,
                id: "",
                jcmc: "午休",
                conceal: false,
                expire: false
              });
              temp.splice(_this.napIndex, 0, _this.napObj);
              _this.series = temp;
            // } else {
            //   _this.$toast("没有节次信息");
            // }
          } else {
            _this.$toast(rsp.data.jcInfo.msg);
          }
          //code should equal 0
          if (rsp.data.kcInfo.code != "0") {
            //length should more than 0
            //if (rsp.data.kcInfo.data && rsp.data.kcInfo.data.length > 0) {
              _this.courseList = rsp.data.kcInfo.data;
              var testParam =
                '[{"skcdmc":"一年五班","skrq":"2019-08-26","kcdm":"YW","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"1","jxrwid":39,"kcmc":"语文","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-08-26","kcdm":"SX","skjs":"10086110","skbj":"1101", "skjsxm":"小李老师","skbjmc":"一年五班","jc":"2","jxrwid":40,"kcmc":"数学","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-08-26","kcdm":"YY","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"3","jxrwid":41,"kcmc":"英语","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-08-26","kcdm":"HX2","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"4","jxrwid":2752,"kcmc":"化学","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-08-26","kcdm":"DL1","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"5","jxrwid":2750,"kcmc":"地理","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-08-26","kcdm":"LS","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"6","jxrwid":30,"kcmc":"历史","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-08-26","kcdm":"YW","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"7","jxrwid":2749,"kcmc":"生物","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-08-26","kcdm":"YW","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"8","jxrwid":39,"kcmc":"语文","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-08-27",\
                "kcdm":"YY","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"1","jxrwid":41,"kcmc":"英语","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-08-27","kcdm":"HX2","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班",\
                "jc":"2","jxrwid":2752,"kcmc":"化学","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-27","kcdm":"DL1","skjs":"10086110",\
                "skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"3","jxrwid":2750,"kcmc":"地理","skcddm":"1011"},{"skcdmc":"一年五班",\
                "skrq":"2019-08-27","kcdm":"LS","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"4","jxrwid":30,"kcmc":"历史","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-08-27","kcdm":"SW1","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"5",\
                "jxrwid":2749,"kcmc":"生物","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-27","kcdm":"YW","skjs":"10086110","skbj":"1101",\
                "skjsxm":"小李老师","skbjmc":"一年五班","jc":"6","jxrwid":39,"kcmc":"语文","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-27",\
                "kcdm":"YW","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"7","jxrwid":39,"kcmc":"语文","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-08-27","kcdm":"SX","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"8","jxrwid":40,\
                "kcmc":"数学","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-28","kcdm":"SX","skjs":"10086110","skbj":"1101","skjsxm":"小李老师",\
                "skbjmc":"一年五班","jc":"1","jxrwid":40,"kcmc":"数学","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-28","kcdm":"YY","skjs":"10086110",\
                "skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"2","jxrwid":41,"kcmc":"英语","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-28",\
                "kcdm":"HX2","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"3","jxrwid":2752,"kcmc":"化学","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-08-28","kcdm":"DL1","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"4",\
                "jxrwid":2750,"kcmc":"地理","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-28","kcdm":"LS","skjs":"10086110","skbj":"1101","skjsxm":"小李老师",\
                "skbjmc":"一年五班","jc":"5","jxrwid":30,"kcmc":"历史","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-28","kcdm":"SW1","skjs":"10086110",\
                "skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"6","jxrwid":2749,"kcmc":"生物","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-28",\
                "kcdm":"YW","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"7","jxrwid":39,"kcmc":"语文","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-08-28","kcdm":"HX2","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"8","jxrwid":2752,\
                "kcmc":"化学","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-29","kcdm":"YY","skjs":"10086110","skbj":"1101","skjsxm":"小李老师",\
                "skbjmc":"一年五班","jc":"1","jxrwid":41,"kcmc":"英语","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-29","kcdm":"HX2","skjs":"10086110",\
                "skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"2","jxrwid":2752,"kcmc":"化学","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-29",\
                "kcdm":"DL1","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"3","jxrwid":2750,"kcmc":"地理","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-08-29","kcdm":"LS","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"4",\
                "jxrwid":30,"kcmc":"历史","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-29","kcdm":"SW1","skjs":"10086110","skbj":"1101",\
                "skjsxm":"小李老师","skbjmc":"一年五班","jc":"5","jxrwid":2749,"kcmc":"生物","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-29",\
                "kcdm":"YW","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"6","jxrwid":39,"kcmc":"语文","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-08-29","kcdm":"YW","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"7","jxrwid":39,\
                "kcmc":"语文","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-29","kcdm":"DL1","skjs":"10086110","skbj":"1101","skjsxm":"小李老师",\
                "skbjmc":"一年五班","jc":"8","jxrwid":2750,"kcmc":"地理","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-30","kcdm":"DL1","skjs":"10086110",\
                "skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"1","jxrwid":2750,"kcmc":"地理","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-30",\
                "kcdm":"LS","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"2","jxrwid":30,"kcmc":"历史","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-08-30","kcdm":"SW1","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"3","jxrwid":2749,\
                "kcmc":"生物","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-30","kcdm":"YW","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班",\
                "jc":"4","jxrwid":39,"kcmc":"语文","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-30","kcdm":"HX2","skjs":"10086110","skbj":"1101","skjsxm":"小李老师",\
                "skbjmc":"一年五班","jc":"5","jxrwid":2752,"kcmc":"化学","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-30","kcdm":"LS","skjs":"10086110",\
                "skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"6","jxrwid":30,"kcmc":"历史","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-30",\
                "kcdm":"SW1","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"7","jxrwid":2749,"kcmc":"生物","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-08-30","kcdm":"YW","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"8","jxrwid":39,"kcmc":"语文",\
                "skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-31","kcdm":"YY","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班",\
                "jc":"1","jxrwid":41,"kcmc":"英语","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-31","kcdm":"HX2","skjs":"10086110","skbj":"1101",\
                "skjsxm":"小李老师","skbjmc":"一年五班","jc":"2","jxrwid":2752,"kcmc":"化学","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-31","kcdm":"DL1",\
                "skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"3","jxrwid":2750,"kcmc":"地理","skcddm":"1011"},{"skcdmc":"一年五班",\
                "skrq":"2019-08-31","kcdm":"LS","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"4","jxrwid":30,"kcmc":"历史","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-08-31","kcdm":"SW1","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"5",\
                "jxrwid":2749,"kcmc":"生物","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-31","kcdm":"YW","skjs":"10086110","skbj":"1101","skjsxm":"小李老师",\
                "skbjmc":"一年五班","jc":"6","jxrwid":39,"kcmc":"语文","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-31","kcdm":"YW","skjs":"10086110",\
                "skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"7","jxrwid":39,"kcmc":"语文","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-31",\
                "kcdm":"SX","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"8","jxrwid":40,"kcmc":"数学","skcddm":"1011"},\
                {"skcdmc":"一年五班","skrq":"2019-09-01","kcdm":"SX","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"8","jxrwid":40,"kcmc":"数学",\
                "skcddm":"1011"}]';

                // var testParam =
                // '[{"skcdmc":"一年五班","skrq":"2019-08-26","kcdm":"YW","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班",\
                // "jc":"1","jxrwid":39,"kcmc":"语文","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-26","kcdm":"SX","skjs":"10086110","skbj":"1101",\
                // "skjsxm":"小李老师","skbjmc":"一年五班","jc":"2","jxrwid":40,"kcmc":"数学","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-26",\
                // "kcdm":"YY","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"3","jxrwid":41,"kcmc":"英语","skcddm":"1011"},\
                // {"skcdmc":"一年五班","skrq":"2019-08-26","kcdm":"HX2","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"4",\
                // "jxrwid":2752,"kcmc":"化学","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-26","kcdm":"DL1","skjs":"10086110","skbj":"1101",\
                // "skjsxm":"小李老师","skbjmc":"一年五班","jc":"5","jxrwid":2750,"kcmc":"地理","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-26",\
                // "kcdm":"LS","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"6","jxrwid":30,"kcmc":"历史","skcddm":"1011"},\
                // {"skcdmc":"一年五班","skrq":"2019-08-26","kcdm":"SW1","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"7",\
                // "jxrwid":2749,"kcmc":"生物","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-26","kcdm":"YW","skjs":"10086110","skbj":"1101",\
                // "skjsxm":"小李老师","skbjmc":"一年五班","jc":"8","jxrwid":39,"kcmc":"语文","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-27",\
                // "kcdm":"YY","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"1","jxrwid":41,"kcmc":"英语","skcddm":"1011"},\
                // {"skcdmc":"一年五班","skrq":"2019-08-27","kcdm":"HX2","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班",\
                // "jc":"2","jxrwid":2752,"kcmc":"化学","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-27","kcdm":"DL1","skjs":"10086110",\
                // "skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"3","jxrwid":2750,"kcmc":"地理","skcddm":"1011"},{"skcdmc":"一年五班",\
                // "skrq":"2019-08-27","kcdm":"LS","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"4","jxrwid":30,"kcmc":"历史","skcddm":"1011"},\
                // {"skcdmc":"一年五班","skrq":"2019-08-27","kcdm":"SW1","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"5",\
                // "jxrwid":2749,"kcmc":"生物","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-27","kcdm":"YW","skjs":"10086110","skbj":"1101",\
                // "skjsxm":"小李老师","skbjmc":"一年五班","jc":"6","jxrwid":39,"kcmc":"语文","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-27",\
                // "kcdm":"YW","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"7","jxrwid":39,"kcmc":"语文","skcddm":"1011"},\
                // {"skcdmc":"一年五班","skrq":"2019-08-27","kcdm":"SX","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"8","jxrwid":40,\
                // "kcmc":"数学","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-28","kcdm":"SX","skjs":"10086110","skbj":"1101","skjsxm":"小李老师",\
                // "skbjmc":"一年五班","jc":"1","jxrwid":40,"kcmc":"数学","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-28","kcdm":"YY","skjs":"10086110",\
                // "skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"2","jxrwid":41,"kcmc":"英语","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-28",\
                // "kcdm":"HX2","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"3","jxrwid":2752,"kcmc":"化学","skcddm":"1011"},\
                // {"skcdmc":"一年五班","skrq":"2019-08-28","kcdm":"DL1","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"4",\
                // "jxrwid":2750,"kcmc":"地理","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-28","kcdm":"LS","skjs":"10086110","skbj":"1101","skjsxm":"小李老师",\
                // "skbjmc":"一年五班","jc":"5","jxrwid":30,"kcmc":"历史","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-28","kcdm":"SW1","skjs":"10086110",\
                // "skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"6","jxrwid":2749,"kcmc":"生物","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-28",\
                // "kcdm":"YW","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"7","jxrwid":39,"kcmc":"语文","skcddm":"1011"},\
                // {"skcdmc":"一年五班","skrq":"2019-08-28","kcdm":"HX2","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"8","jxrwid":2752,\
                // "kcmc":"化学","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-29","kcdm":"YY","skjs":"10086110","skbj":"1101","skjsxm":"小李老师",\
                // "skbjmc":"一年五班","jc":"1","jxrwid":41,"kcmc":"英语","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-29","kcdm":"HX2","skjs":"10086110",\
                // "skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"2","jxrwid":2752,"kcmc":"化学","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-29",\
                // "kcdm":"DL1","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"3","jxrwid":2750,"kcmc":"地理","skcddm":"1011"},\
                // {"skcdmc":"一年五班","skrq":"2019-08-29","kcdm":"LS","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"4",\
                // "jxrwid":30,"kcmc":"历史","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-29","kcdm":"SW1","skjs":"10086110","skbj":"1101",\
                // "skjsxm":"小李老师","skbjmc":"一年五班","jc":"5","jxrwid":2749,"kcmc":"生物","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-29",\
                // "kcdm":"YW","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"6","jxrwid":39,"kcmc":"语文","skcddm":"1011"},\
                // {"skcdmc":"一年五班","skrq":"2019-08-29","kcdm":"YW","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"7","jxrwid":39,\
                // "kcmc":"语文","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-29","kcdm":"DL1","skjs":"10086110","skbj":"1101","skjsxm":"小李老师",\
                // "skbjmc":"一年五班","jc":"8","jxrwid":2750,"kcmc":"地理","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-30","kcdm":"DL1","skjs":"10086110",\
                // "skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"1","jxrwid":2750,"kcmc":"地理","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-30",\
                // "kcdm":"LS","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"2","jxrwid":30,"kcmc":"历史","skcddm":"1011"},\
                // {"skcdmc":"一年五班","skrq":"2019-08-30","kcdm":"SW1","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"3","jxrwid":2749,\
                // "kcmc":"生物","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-30","kcdm":"YW","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班",\
                // "jc":"4","jxrwid":39,"kcmc":"语文","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-30","kcdm":"HX2","skjs":"10086110","skbj":"1101","skjsxm":"小李老师",\
                // "skbjmc":"一年五班","jc":"5","jxrwid":2752,"kcmc":"化学","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-30","kcdm":"LS","skjs":"10086110",\
                // "skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"6","jxrwid":30,"kcmc":"历史","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-30",\
                // "kcdm":"SW1","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"7","jxrwid":2749,"kcmc":"生物","skcddm":"1011"},\
                // {"skcdmc":"一年五班","skrq":"2019-08-30","kcdm":"YW","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"8","jxrwid":39,"kcmc":"语文",\
                // "skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-31","kcdm":"YY","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班",\
                // "jc":"1","jxrwid":41,"kcmc":"英语","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-31","kcdm":"HX2","skjs":"10086110","skbj":"1101",\
                // "skjsxm":"小李老师","skbjmc":"一年五班","jc":"2","jxrwid":2752,"kcmc":"化学","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-31","kcdm":"DL1",\
                // "skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"3","jxrwid":2750,"kcmc":"地理","skcddm":"1011"},{"skcdmc":"一年五班",\
                // "skrq":"2019-08-31","kcdm":"LS","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"4","jxrwid":30,"kcmc":"历史","skcddm":"1011"},\
                // {"skcdmc":"一年五班","skrq":"2019-08-31","kcdm":"SW1","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"5",\
                // "jxrwid":2749,"kcmc":"生物","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-31","kcdm":"YW","skjs":"10086110","skbj":"1101","skjsxm":"小李老师",\
                // "skbjmc":"一年五班","jc":"6","jxrwid":39,"kcmc":"语文","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-31","kcdm":"YW","skjs":"10086110",\
                // "skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"7","jxrwid":39,"kcmc":"语文","skcddm":"1011"},{"skcdmc":"一年五班","skrq":"2019-08-31",\
                // "kcdm":"SX","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"8","jxrwid":40,"kcmc":"数学","skcddm":"1011"},\
                // {"skcdmc":"一年五班","skrq":"2019-09-01","kcdm":"SX","skjs":"10086110","skbj":"1101","skjsxm":"小李老师","skbjmc":"一年五班","jc":"8","jxrwid":40,"kcmc":"数学",\
                // "skcddm":"1011"}]';
              testParam = $.parseJSON(testParam);
              _this.courseList = testParam;              
              //每个课程配一个颜色
              var count=0;
              _this.courseList.forEach((colorItem,colorIndex)=>{
                count++;
                if(!_this.colorM.has(colorItem.kcdm)){
                  _this.colorM.set(colorItem.kcdm, _this.colorSet[count]);
                }
              }) 
              //每周7天,每天1个集合
              _this.courseList.forEach((courseItem, courseIndex) => {
                switch (new Date(courseItem.skrq.replace(/-/g, "/")).getDay()) {
                  case 0:
                    //_this.sunSet.push(courseItem);
                    var index = courseItem.jc - 1;
                    if (index < _this.napIndex) {
                      _this.sunSet[index] = courseItem;
                    } else {
                      _this.sunSet[courseItem.jc] = courseItem;
                    }                
                    break;
                  case 1:
                    var index = courseItem.jc - 1;
                    if (index < _this.napIndex) {
                      _this.monSet[index] = courseItem;
                    } else {
                      _this.monSet[courseItem.jc] = courseItem;
                    }         
                    //_this.monSet.push(courseItem);
                    break;
                  case 2:
                    var index = courseItem.jc - 1;
                    if (index < _this.napIndex) {
                      _this.tueSet[index] = courseItem;
                    } else {
                      _this.tueSet[courseItem.jc] = courseItem;
                    }         
                    //_this.tueSet.push(courseItem);
                    break;
                  case 3:
                    var index = courseItem.jc - 1;
                    if (index < _this.napIndex) {
                      _this.wenSet[index] = courseItem;
                    } else {
                      _this.wenSet[courseItem.jc] = courseItem;
                    }         
                    //_this.wenSet.push(courseItem);
                    break;
                  case 4:
                    var index = courseItem.jc - 1;
                    if (index < _this.napIndex) {
                      _this.thiSet[index] = courseItem;
                    } else {
                      _this.thiSet[courseItem.jc] = courseItem;
                    }         
                    //_this.thiSet.push(courseItem);
                    break;
                  case 5:
                    var index = courseItem.jc - 1;
                    if (index < _this.napIndex) {
                      _this.friSet[index] = courseItem;
                    } else {
                      _this.friSet[courseItem.jc] = courseItem;
                    }         
                    //_this.friSet.push(courseItem);
                    break;
                  case 6:
                    var index = courseItem.jc - 1;
                    if (index < _this.napIndex) {
                      _this.satSet[index] = courseItem;
                    } else {
                      _this.satSet[courseItem.jc] = courseItem;
                    }         
                    //_this.satSet.push(courseItem);
                    break;
                }
              });
              //去重
              _this.duplicate(_this.monSet);
              _this.duplicate(_this.tueSet);
              _this.duplicate(_this.wenSet);
              _this.duplicate(_this.thiSet);
               _this.duplicate(_this.friSet);
              _this.duplicate(_this.satSet);
              _this.duplicate(_this.sunSet);            
              //假如午休
            // } else {
            //   _this.$toast("没有课程信息");
            // }
          } else {            
            _this.$toast(rsp.data.kcInfo.msg)
          }
        } else {
          _this.$toast(rsp.data.msg);
        }
      });
    },
    //合并相同元素
      duplicate(list) {
        var _this = this;
        //console.log('before:',JSON.stringify(list))
        var rmNap=false;
        var temp = [];
        var newList = [];
        list.forEach(function(dom, i) {
          if (temp.indexOf(dom.kcdm) == -1) {
            //console.log(temp.indexOf(dom.kcdm),dom.kcdm,'===')
            //没重复
            temp.push(dom.kcdm);
            newList.push(dom);
          } else {
            //重复数据--连续或不间断

            if (!list[i].kcmc) {
              //没课的时候，重复空白
              return;
            }

            //console.log("出现重复", i, list[i].kcmc,'----');
            //console.log(JSON.stringify(list))
            var napCount = false;
            var repeat = [];
            var repeat1 = [];
            var count = 0;

            list.forEach(function(dom1, i1) {
              //判断是否连续
              //console.log(i1,'---',list.length)
              if (dom1.kcdm == dom.kcdm) {

                //不连续,检查是否因为午休而不连续
                //console.log(dom.kcmc,'conn1ected',dom.jc,dom1.jc)
                count++;
                repeat.push(i1);
                repeat1.push(i1);
                var lastIndex=list.length-1;
                //最后一个不会自动触发----触发最后一个数组
                if(repeat1.length>1&&repeat1.indexOf(lastIndex)>-1){
                  //console.log('----',repeat1);
                  if(repeat1[0]<_this.napIndex&&repeat1[repeat1.length-1]>_this.napIndex){
                    //跨午休
                    rmNap=true;
                    var jc='';
                    repeat1.push(_this.napIndex);
                    repeat1=_this.order(repeat1);
                    //console.log(_this.ifConstant(repeat1),'***** nap')
                    if(!_this.ifConstant(repeat1)){
                      return;
                    }
                    repeat1.forEach((reItem,reIndex)=>{
                      //console.log(list[reItem].jc,'---',list[reItem].kcmc)
                      jc+=reItem+','
                      if(reIndex>0){
                        list[reItem].conceal=true;
                      }
                    })
                    jc=jc.substring(0,jc.length-1);
                    if(list[repeat1[0]]&&list[repeat1[0]].jc){
                      list[repeat1[0]].jc=jc;
                    }
                  }else{
                    //不函午休
                    repeat1=_this.order(repeat1);
                    console.log(_this.ifConstant(repeat1),'no ***** nap')
                    if(!_this.ifConstant(repeat1)){
                      return;
                    }
                    var jc='';
                    repeat1.forEach((reItem,reIndex)=>{
                      jc+=reItem+','
                      if(reIndex>0){
                        list[reItem].conceal=true;
                      }
                    })
                    jc=jc.substring(0,jc.length-1);
                    if(list[repeat1[0]]&&list[repeat1[0]].jc){
                      list[repeat1[0]].jc=jc;
                    }
                  }
                }
               //最后一个数组触发完成

              } else {
                //console.log('repeat',repeat,'count',count)
                if (count > 0 &&dom1.kcdm == "nap" &&_this.napIndex > 0 &&_this.napIndex < list.length - 1 &&list[i1 + 1].kcdm == dom.kcdm) {
                  //不连续,查看是否因为午休中断,如果当前是午休且下一个元素是连续的,就继续count++  morning--afternoon
                  count++;
                  napCount = true;
                  //console.log('nap','dom.jc',dom.jc,'dom1.jc',dom1.jc,'dom1.kcmc',dom1.kcmc,'dom.kcmc',dom.kcmc,'count',count)
                } else if(count>0){
                  //console.log('clear','dom.jc',dom.jc,'dom1.jc',dom1.jc,'dom1.kcmc',dom1.kcmc,'dom.kcmc',dom.kcmc,'count',count,'repeat',JSON.stringify(repeat),'repeat1',JSON.stringify(repeat1),'i:',i,'nap',napCount)
                  //console.log(repeat1)
                  if(repeat1.length==1&&repeat1[0]>0){//和上一节课对比 有时候相隔1个或多个重复
                    var testIndex=repeat1[0];
                    var priorIndex=testIndex-1;
                    //console.log(repeat1,testIndex,'===',priorIndex)
                    if(list[priorIndex].kcdm!='nap'&&list[priorIndex].kcdm!=list[testIndex].kcdm){
                      count = 0;
                      repeat1=[];
                      return;

                    }
                  }

                  if(napCount){//有跨午休的
                     rmNap=true;
                     var jc='';
                     repeat1.push(_this.napIndex);
                     repeat1=_this.order(repeat1);
                     repeat1.forEach((reItem,reIndex)=>{
                       //console.log(list[reItem].jc,'---',list[reItem].kcmc)
                       jc+=reItem+','
                       if(reIndex>0){
                         list[reItem].conceal=true;
                       }
                     })
                     jc=jc.substring(0,jc.length-1);
                     if(list[repeat1[0]]&&list[repeat1[0]].jc){
                       list[repeat1[0]].jc=jc;
                     }
                  }else{//没午休
                    var jc='';
                     repeat1.forEach((reItem,reIndex)=>{
                        jc+=reItem+','
                        if(reIndex>0){
                          list[reItem].conceal=true;
                        }
                     })
                     jc=jc.substring(0,jc.length-1);
                     if(list[repeat1[0]]&&list[repeat1[0]].jc){
                       list[repeat1[0]].jc=jc;
                     }
                  }
                  //console.log('repeat1 清空',repeat1)
                  count = 0;
                  repeat1=[];
                }
              }
            });
          }
        });
        if(rmNap){
          _this.hideNap++;
        }
      },
     //数组排序
      order(arr){
          var len=arr.length;
          var max=0; // 定义一个变量max,用于保存数组中的最大值。
          var num=0; // 定义一个变量num,用于保存数组中最大值的位置。
          var mid=0; // 定义一个变量mid,用于交换最大值和最后一个值。
          for(var i=len-1;i>0;i--){
              max=arr[0];
              for(var j=0;j<=i;j++){
                  if(max<=arr[j]){
                      max=arr[j]; // 获取数组中最大值
                      num=j;
                  }
              }
              mid=arr[i]; // 将数组最后一个元素的值赋给中间变量；
              arr[num]=mid; // 将中间变量赋给最大值的元素；
              arr[i]=max; // 将最大值赋给数组最后一个元素；
          }
          return arr;
      },
       //判断数组是否连续
      ifConstant(a){
        a.sort();
        var b=[];
        for(var i=a[0];i<=a[a.length-1];i++)
        {
          b.push(i);
        }

        if(a.toString()===b.toString()){
          return true
        }
        else{
          return false
        }
      },
     //隐藏td
      computCc(ifNap,obj) {
        if(ifNap=='nap'&&obj.conceal){
          return 'courseNap conceal';
        }else if(ifNap=='nap'&&!obj.conceal){
          return "courseNap";
        }else if(ifNap!='nap'&&obj.conceal){
          return 'conceal'
        }else if(ifNap!='nap'&&!obj.conceal){
          return '';
        }
      },
      //合并td
      computRs(obj) {
        var series = obj.jc;
        if (obj.jc.length > 1) {
          series = series.split(",");
          return series.length;
        } else {
          return 1;
        }
      },
    //解析课程名称
    computeCouse(day,seri){
      var _this=this;
     
    },
    //解析授课教师
    computeTeacher(){

    },
    //解析教室
    computeClassRoom(){

    },
    //解析背景颜色
    computeBg(){

    },
    //解析合并单元格
    computeColMerge(){

    },
    //上一周
    preW() {
      var _this = this;
      _this.weekShift--;
      _this.weekSpanCal();
    },
    //下一周
    nexW() {
      var _this = this;
      _this.weekShift++;
      _this.weekSpanCal();
    },
    //返回当前周
    liveW() {
      var _this = this;
      _this.weekShift = 0;
      _this.weekSpanCal();
    },
    //计算每周起始时间
    weekSpanCal() {
      var _this = this;
      var date = new Date();
      var wDate = date.getDay();
      if (wDate == 0) {
        wDate = 7;
      }
      var curMil = 0;
      var fsMil = 0;
      var fnMil = 0;
      var firstDate = "";
      var lastDate = "";
      var curDate = "";
      curMil = Date.parse(new Date());
      fsMil =
        curMil -
        (wDate - 1) * 24 * 60 * 60 * 1000 +
        _this.weekShift * (24 * 60 * 60 * 1000 * 7);
      fnMil =
        curMil +
        (7 - wDate) * 24 * 60 * 60 * 1000 +
        _this.weekShift * (24 * 60 * 60 * 1000 * 7);
      curDate = date.Format("yyyy-MM-dd");
      firstDate = new Date(fsMil).Format("MM/dd");
      lastDate = new Date(fnMil).Format("MM/dd");
      _this.startDate = new Date(fsMil).Format("yyyy-MM-dd");
      _this.endDate = new Date(fnMil).Format("yyyy-MM-dd");
      _this.weekSpan = firstDate + " ~ " + lastDate;
      var theadMil = fsMil - 24 * 60 * 60 * 1000;
      _this.theadDate = [];
      _this.curMonth = new Date(fsMil).Format("MM");
      for (var x = 0; x < 7; x++) {
        theadMil += 24 * 60 * 60 * 1000;
        var theadD = new Date(theadMil).Format("MM.dd");
        _this.theadDate.push(theadD);
      }
      //_this.loadInfo();
    },
    onClickLeft() {
      cxMethod.exit();
    },
    onClickRight() {}
  },
  mounted() {
    var _this = this;
    _this.weekSpanCal();
    _this.loadCourse();
    //计算并设置高度
    var contentH=$(window).height()-$('.van-nav-bar').height()-$('.weekSwit').height()-$('.van-nav-bar').offset().top+'px';
    $('.wrapper').css('height',contentH)
    var right_div2 = document.getElementById("rightLow");
    right_div2.onscroll = function() {
      var right_div2_top = this.scrollTop;
      var right_div2_left = this.scrollLeft;
      document.getElementById("leftLow").scrollTop = right_div2_top;
      document.getElementById("rightUp").scrollLeft = right_div2_left;
    };
  }
};
</script>
<style scoped>
.external {
  display: flex;
  flex-flow: column;
}
.external /deep/ .page-scroll {
  flex: 1;
}
.external /deep/ .page-scroll /deep/ .page-scroll__content {
  height: 100%;
}
.wrapper {
  display: flex;
  
}
.left {
  width: 49px;
  display: flex;
  flex-flow: column;
}
.left .leftUp {
  height: 59px;
  line-height: 59px;
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(255, 115, 0, 1);
}
.left .leftLow {
  width: 100%;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-flow: column;
}
.right {
  display: flex;
  flex-flow: column;
  width: calc(100% - 49px);
}
.right .rightUp {
  height: 59px;
  width: 326px;
  overflow: hidden;
}
.thWra {
  width: 459px;
}
.right .rightLow {
  width: 100%;
  height: 400px;
  overflow: scroll;
  flex: 1;
}
.weekSwit {
  height: 50px;
  border-top: 1px solid #eee;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 6px 0px rgba(204, 204, 204, 0.4);
}

.weekSwit .weekSp {
  height: 100%;
  width: 60%;
}

.weekSwit .weekSp .left {
  height: 100%;
  width: 25%;
  text-align: center;
  display: inline-block;
}

/* .weekSwit .weekSp .left img {
    height: 14px;
    width: 8px;
    margin-top: 18px;
  } */

.weekSwit .weekSp .mid {
  height: 48px;
  line-height: 48px;
  width: 50%;
  font-size: 14px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  text-align: center;
}

.weekSwit .weekSp .mid img {
  height: 26px;
}

.weekSwit .weekSp .right {
  height: 100%;
  width: 25%;
  text-align: center;
}

/* .weekSwit .weekSp .right img {
    height: 14px;
    width: 8px;
    margin-top: 18px;
  } */

.weekSwit .reverse1 {
  height: 100%;
  width: 40%;
}

.weekSwit .reverse {
  height: 100%;
  width: 100%;
}

.weekSwit .reverse .left {
  height: 48px;
  width: 30%;
  line-height: 48px;
  text-align: right;
  font-size: 16px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

/* .weekSwit .reverse .left img {
    height: 20px;
    width: 20px;
    margin-top: 15px;
  } */

.weekSwit .reverse .right {
  height: 48px;
  line-height: 48px;
  text-align: left;
  width: 70%;
  text-indent: 10px;
}
.ib {
  display: inline-block;
}
.fl {
  float: left;
}

table.tableDate,
table.courseTable {
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 1px 2px;
}
.courseWra {
  width: 457px;
  height: auto;
}
.courseNap {
  height: 10px !important;
}
td.courseTd .courseInnerWra {
  width: 53px;
  height: 93px;
  padding: 10px 4px;
}
td.courseTd .courseInnerWra .courseName {
  width: 47px;
  height: 68px;
  padding: 0 3px;
}
td.courseTd .courseInnerWra .courseName .couseContent {
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
td.courseTd .courseInnerWra .addition {
  width: 53px;
  height: 25px;
}
td.courseTd .courseInnerWra .addition .location {
  width: 53px;
  height: 10px;
  margin-bottom: 5px;
  display: flex;
  flex-flow: row;
}
td.courseTd .courseInnerWra .addition .location:last-child {
  margin-bottom: 0;
}
td.courseTd .courseInnerWra .addition .location .icon {
  width: 17px;
  height: 10px;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
}
td.courseTd .courseInnerWra .addition .location .icon .img {
  width: 8px;
  height: 10px;
}
td.courseTd .courseInnerWra .addition .location .icon .img1 {
  width: 10px;
  height: 10px;
}
td.courseTd .courseInnerWra .addition .location .spec {
  width: 36px;
  height: 10px;
  line-height: 10px;
  font-size: 10px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #ffffff;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.dspFlex {
  display: flex;
}
td.nap,
.nap {
  height: 10px !important;
  border-spacing: 2px !important;
  line-height: 10px;
}
td.nap {
  display: table-cell !important;
  width: 43px;
  padding: 1px 0;
  border-top: 5px solid white;
  border-bottom: 5px solid white;
}
td.firstCol{
  display: inline-block;
  width: 43px;
  height: 103px;
  border-spacing: 10px 2px;
  margin: 5px 0;
}

td.courseTd {
  height: 113px;
  border-spacing: 10px 2px;
  margin: 5px 0;
  border-radius:4px;
  border-left: 1px solid white;
  border-right: 1px solid white;
}
td.firstCol .subWra {
  width: 43px;
  height: 113px;
  display: flex;
  flex-flow: column;
  justify-content: center;
}
td.firstCol .subWra .class{
  font-size:15px;
  font-family:PingFang SC;
  font-weight:bold;
  color:rgba(51,51,51,1);
  text-align: center;
}
td.firstCol .subWra .time {
  text-align: center;
  font-size:12px;
  font-family:PingFang SC;
  font-weight:500;
  color:rgba(153,153,153,1);
}
td.thweek {
  display: inline-block;
  width: 61px;
  height: 41px;
  line-height: 41px;
  text-align: center;
  vertical-align: middle;
  padding: 6px 1px;
}
td.thweek .wkSeries,
td.thweek .date {
  line-height: 20px;
}
td.thweek .date {
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
}
thead td {
  display: inline-block;
  width: 61px;
  height: 41px;
  line-height: 41px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid white;
}
.conceal {
    display: none ! important;
  }
</style>