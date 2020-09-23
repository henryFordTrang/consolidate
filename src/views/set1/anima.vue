<template>
  <div style="height: 100%;width:100%;">
    <div style="height: 100%;width:100%;background-color:lightblue">
    <router-view />
    </div>
  </div>
</template>
<script>
import TreeTable from 'tree-table-vue';
export default {
  components: {
    TreeTable
  },
  data() {
    return {
      existing: true,
      data4: [
        {
          title: 'parent 1',
          expand: true,
          selected: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1',
                  disabled: true
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1',
                  checked: true
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    treeChange(selection, item) {
      this.collection = selection;
      console.log(this.collection)
    },
    clickHandle(){
      if(exsiting){
        this.collection = []
      }else{
        
      }
    },
    excel(){
      var url = '/study/admin/export';
      var config = {
        'headers': {
          "Content-Type": "application/json; application/octet-stream",
          'responseType': "blob"
        }
        };
      this.$axios.post(url,  { 'Content-Type': 'application/json; application/octet-stream', responseType: 'blob' }).then((rsp)=>{
         console.log(rsp)
        console.log(rsp.data)
        // this.download('xxxx',rsp.data)
        // var blob = new Blob([rsp.data], { type: 'application/excel' })
        // var fileName = 'text.xls'
        // const link = document.createElement("a"); // 创建a标签
        //   link.download = fileName; // a标签添加属性
        //   link.style.display = "none";
        //   link.href = URL.createObjectURL(blob);
        //   document.body.appendChild(link);
        //  link.click(); // 执行下载
        //   URL.revokeObjectURL(link.href); // 释放url
        //   document.body.removeChild(link); // 释放标签
        // var url = URL.createObjectURL(blob)
        // alert(url)
        // window.location.href = url

        let url = window.URL.createObjectURL(new Blob([rsp.data],{ type: 'application/octet-stream' }))
    let link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.setAttribute('download', 'excel1111.xlsx')
    document.body.appendChild(link)
    link.click()
      })
    },
    download(filename,blob) {
            var oReq = new XMLHttpRequest();
            oReq.open("POST", '/study/admin/export', true);
            oReq.responseType = "blob";
            oReq.onload = function (oEvent) {
                var content = oReq.response;
 
                var elink = document.createElement('a');
                elink.download = filename;
                elink.style.display = 'block';
 
                var blob = new Blob([blob]);
                elink.href = URL.createObjectURL(blob);
 
                document.body.appendChild(elink);
                elink.click();
 
                document.body.removeChild(elink);
            };
            oReq.send();
        },
    ajax() {
      var url = '/study/admin/export'
      var xhr = new XMLHttpRequest();
        xhr.open('post', url, true);
        xhr.responseType = 'blob';
        xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
        xhr.onload = function () {
            if (this.status == 200) {
                var blob = this.response;
                var a = document.createElement('a');
                var url = window.URL.createObjectURL(blob);
                a.href = url;
                //设置文件名称
                a.download = '用户信息.xls';
                a.click();
            }
        }
        xhr.send();
    }
  },
  mounted() {
    this.ajax()
    console.log(TreeTable);
  }
};
</script>
<style lang="less" scoped>
</style>