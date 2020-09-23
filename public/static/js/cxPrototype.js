((W,$,B)=>{
    if (typeof W.cxMethod != "undefined") {
        return;
    }
    function cxMethod() {

    }
    cxMethod.prototype.scan=function(){
        B.postNotification('CLIENT_BARCODE_SCANNER', {});
    }
    cxMethod.prototype.exit=function(){
        B.postNotification('CLIENT_EXIT_WEBAPP', {});
    }
    cxMethod.prototype.noNavi=function(option){
        var cmd = "CLIENT_TOOLBAR_TYPE";
        B.postNotification(cmd, option);
    }    
    cxMethod.prototype.audio=function(option){
        var cmd = "CLIENT_AUDIO_RECORD";
        B.postNotification('CLIENT_AUDIO_RECORD', {
            
        }) ; 
    }
    cxMethod.prototype.picupload=function(callback){
        var cmd = "CLIENT_CHOOSE_IMAGE";

        B.unbind(cmd);
        callback && B.bind(cmd, callback);
        B.postNotification(cmd, {
            'camare':'1'
        }) ; 
    }
  cxMethod.prototype.test=function(){alert(11)}
    W['cxMethod']=new cxMethod();
})(window,jQuery,jsBridge)