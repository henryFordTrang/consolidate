<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <transition :name="tranInout">
      <keep-alive>
        <router-view v-if="$route.meta.KeepAlive" class="anima"></router-view>
      </keep-alive>
    </transition>
    <transition :name="tranInout">
        <router-view v-if="!$route.meta.KeepAlive" class="anima"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "app",
  data(){
    return{
      tranInout:'slide-left',
    }
  },
  watch:{
    $route(){
      switch(this.$router.animation){
        case 'go':this.tranInout='slide-left';
        break;
        case 'back':this.tranInout='slide-right';
        break;
      }
    }
  },
  methods:{
    userInfo(){
      var _this=this;
      var url=_this.$util.axiosUrl()+"/api/auth/loginDoorplateByPhone?uid=" + localStorage.uid;
      _this.$axios.get(url).then((data)=>{
        if (data.data.code == "0") {
            localStorage.role = data.data.role;
            localStorage.rybh = data.data.rybh;
            localStorage.orgId = data.data.orgId;
            localStorage.roleId = data.data.roleId;
            localStorage.fdyStatus = data.data.fdyStatus;            
            if (data.data.userId) {
              localStorage.userId = data.data.userId;
            }
            if (data.data.role == "1") {
              localStorage.ryxm = data.data.xm;
              //index_informRole,通知/新闻查询角色
              if (data.data.fdyStatus.indexOf("5") != -1) {
                //运维人员角色
                localStorage.equCode = localStorage.myEquCode;
                if (localStorage.index_type == "0") {
                  //激活二维码
                  localStorage.equRegister_type = 1; //进入激活的方式：1-扫码激活，2-点击未激活设备进入
                  //_this.$router.replace("../operator/equRegister");
                }else{
                 if (data.data.fdyStatus.indexOf("0") != -1) {
                    //管理员/校长角色
                    localStorage.index_informRole = 0;
                    localStorage.index_roleName="管理员";
                    //_this.$router.replace("./admin/roleMenu");
                  } else if (data.data.fdyStatus.indexOf("4") != -1) {
                    //年段长角色
                    localStorage.index_informRole = 1;
                    localStorage.index_roleName="年段长";
                    localStorage.index_gradeId = data.data.gradeCode;
                    //_this.$router.replace("./admin/roleMenu");
                  } else if (data.data.fdyStatus.indexOf("2") != -1) {
                    //班主任角色
                    localStorage.index_informRole = 2;
                    localStorage.index_roleName="班主任";
                    localStorage.index_classId = data.data.bjdm;
                    //_this.$router.replace("./admin/roleMenu");
                  } else if (data.data.fdyStatus.indexOf("1") != -1) {
                    //任课老师角色
                    localStorage.index_informRole = 3;
                    localStorage.index_roleName="任课老师";
                    //_this.$router.replace("./admin/roleMenu");
                  }else{//只是运维人员角色
                    //_this.$router.replace("../operator/index");
                  }
                }
              } else {
                //不是运维人员角色
                if (localStorage.index_type == "0") {
                  //激活二维码
                  _this.$toast("无权限查看，请联系运维人员");
                  // setTimeout(() => {
                  //   goOut();
                  // }, 2000);
                } else {
                  if (data.data.fdyStatus.indexOf("0") != -1) {
                    //管理员/校长角色
                    localStorage.index_informRole = 0;
                  } else if (data.data.fdyStatus.indexOf("4") != -1) {
                    //年段长角色
                    localStorage.index_informRole = 1;
                    localStorage.index_gradeId = data.data.gradeCode;
                  } else if (data.data.fdyStatus.indexOf("2") != -1) {
                    //班主任角色
                    localStorage.index_informRole = 2;
                    localStorage.index_classId = data.data.bjdm;
                    localStorage.index_className = data.data.bjmc;
                  } else if (data.data.fdyStatus.indexOf("1") != -1) {
                    //任课老师角色
                    localStorage.index_informRole = 3;
                  }
                  //_this.$router.replace("./admin/menu");
                }
              }
            } else if (data.data.role == "2" || data.data.role == "3") {
              //2-家长角色,3-学生角色
              if (localStorage.index_type == "0") { //激活二维码
                _this.$toast("无权限查看，请联系运维人员");
                setTimeout(() => {
                  //goOut();
                }, 2000);
              } else {
                localStorage.index_informRole = 2;
                localStorage.index_classId = data.data.bjdm;
                //_this.$router.replace("./admin/menu");
              }
            } else {
              _this.$toast(data.data.msg);
              setTimeout(() => {
                //goOut();
              }, 2000);
            }
            _this.$router.replace('/timeTable')
          }else{
             _this.$toast(data.data.msg);
              setTimeout(() => {
                //goOut();
              }, 2000);
          }
      })  
    }
  },
  created(){
    //this.userInfo();
    //this.$router.replace('/timeTable')
    //
  }
};
</script>
<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
html,body,#app{
  height:100%;
  width:100%;
}
.anima{
  width:100%;
  height:100%;
  transition:all .5s;
}
.slide-left-enter{
  transform: translate(100%, 0);
}
.slide-left-leave-active{
  transform: translate(-50%, 0);
}
.slide-right-enter{
  transform: translate(-100%, 0);
}
.slide-right-leave-active{
  transform: translate(50%, 0);
}
</style>
