<template>
  <div id="app" style="height:100%;width:100%;background-color:orangered">
    <div style="height:100%;background-color:yellowgreen">
    <router-view style="height:100%" />
    </div>
  </div>
</template>
<script>
import xxx from './timeTable.vue';
class ball {
  constructor(color, x, y) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.r = 40;
  }
  render1(ball) {
    var c = document.getElementById('myCanvas');
    var ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.stroke();
  }
}
export default {
  data() {
    return {
      currentRate: 0,
      rate: 0,
      websocket: '',
      value: '',
      fileList: []
    };
  },
  methods: {
    // websocket1() {
    //   var _this = this;
    //   var host = document.location.host;
    //   //console.log(host);
    //   if ('WebSocket' in window) {
    //     _this.websocket = new WebSocket('ws://192.168.10.54:8080/study/StuLo');
    //     _this.websocket.onmessage=_this.onMessage(event);
    //   } else {
    //     alert('当前浏览器 Not support websocket');
    //   }
    // },
    onMessage(event){
      var _this=this;
      console.log('event',event)
      
    },
    send(){
      var _this=this;
      console.log(_this.websocket)
      _this.websocket.send("Hello server!");
    },
    submit() {
      var _this = this;
      console.log(_this.value, 'input value....');
    },
    handleopen() {
      var _this = this;
      //_this.websocket.send("发送数据");
      console.log('handleopen');
    },
    drawBall() {
      var ball0 = new ball('yellow', 100, 100);
      var ball1 = new ball('orange', 100, 210);
      var ball2 = new ball('yellowgreen', 100, 320);
      ball0.render1(ball0);
      ball0.render1(ball1);
      ball0.render1(ball2);
    },
    repeat() {
      var xx = 'henryFord';
      console.log(xx);
      return xx;
    },
    xx() {
      var _this = this;
      //         var xxx=
      // { parent: undefined,
      //   store: Map {
      //      'mode' => 'development',
      //      'context' => 'F:\\Zyun\\practice\\consolidate',
      //      'devtool' => 'cheap-module-eval-source-map' },
      //   devServer: { parent: [Circular],
      //      store: Map {},
      //      allowedHosts: { parent: [Circular], store: Set {} },
      //      bonjour: [Function],
      //      clientLogLevel: [Function],
      //      color: [Function],
      //      compress: [Function],
      //      contentBase: [Function],
      //      disableHostCheck: [Function],
      //      filename: [Function],
      //      headers: [Function],
      //      historyApiFallback: [Function],
      //      host: [Function],
      //      hot: [Function],
      //      hotOnly: [Function],
      //      https: [Function],
      //      info: [Function],
      //      inline: [Function],
      //      lazy: [Function],
      //      noInfo: [Function],
      //      open: [Function],
      //      openPage: [Function],
      //      overlay: [Function],
      //      pfx: [Function],
      //      pfxPassphrase: [Function],
      //      port: [Function],
      //      proxy: [Function],
      //      progress: [Function],
      //      public: [Function],
      //      publicPath: [Function],
      //      quiet: [Function],
      //      setup: [Function],
      //      socket: [Function],
      //      staticOptions: [Function],
      //      stats: [Function],
      //      stdin: [Function],
      //      useLocalIp: [Function],
      //      watchContentBase: [Function],
      //      watchOptions: [Function] },
      //   entryPoints: { parent: [Circular], store: Map { 'app' => [Object] } },
      //   module:
      //    { parent: [Circular],
      //      store: Map { 'noParse' => /^(vue|vue-router|vuex|vuex-router-sync)$/ },
      //      rules: { parent: [Circular], store: [Object] },
      //      defaultRules: { parent: [Circular], store: Map {} },
      //      shorthands: [ 'noParse' ],
      //      noParse: [Function] },
      //   node:
      //    { parent: [Circular],
      //      store:
      //       Map {
      //         'setImmediate' => false,
      //         'dgram' => 'empty',
      //         'fs' => 'empty',
      //         'net' => 'empty',
      //         'tls' => 'empty',
      //         'child_process' => 'empty' } },
      //   optimization:
      //    { parent: [Circular],
      //      store: Map {},
      //      concatenateModules: [Function],
      //      flagIncludedChunks: [Function],
      //      mergeDuplicateChunks: [Function],
      //      minimize: [Function],
      //      minimizer: [Function],
      //      namedChunks: [Function],
      //      namedModules: [Function],
      //      nodeEnv: [Function],
      //      noEmitOnErrors: [Function],
      //      occurrenceOrder: [Function],
      //      portableRecords: [Function],
      //      providedExports: [Function],
      //      removeAvailableModules: [Function],
      //      removeEmptyChunks: [Function],
      //      runtimeChunk: [Function],
      //      sideEffects: [Function],
      //      splitChunks: [Function],
      //      usedExports: [Function] },
      //   output:
      //    { parent: [Circular],
      //      store:Map {
      //         'path' => 'F:\\Zyun\\practice\\consolidate\\advance',
      //         'filename' => '[name].js',
      //         'publicPath' => '/zyschool/phone/',
      //         'globalObject' => '(typeof self !== \'undefined\' ? self : this)' },
      //      auxiliaryComment: [Function],
      //      chunkCallbackName: [Function],
      //      chunkFilename: [Function],
      //      chunkLoadTimeout: [Function],
      //      crossOriginLoading: [Function],
      //      devtoolFallbackModuleFilenameTemplate: [Function],
      //      devtoolLineToLine: [Function],
      //      devtoolModuleFilenameTemplate: [Function],
      //      devtoolNamespace: [Function],
      //      filename: [Function],
      //      globalObject: [Function],
      //      hashDigest: [Function],
      //      hashDigestLength: [Function],
      //      hashFunction: [Function],
      //      hashSalt: [Function],
      //      hotUpdateChunkFilename: [Function],
      //      hotUpdateFunction: [Function],
      //      hotUpdateMainFilename: [Function],
      //      jsonpFunction: [Function],
      //      library: [Function],
      //      libraryExport: [Function],
      //      libraryTarget: [Function],
      //      path: [Function],
      //      pathinfo: [Function],
      //      publicPath: [Function],
      //      sourceMapFilename: [Function],
      //      sourcePrefix: [Function],
      //      strictModuleExceptionHandling: [Function],
      //      umdNamedDefine: [Function],
      //      webassemblyModuleFilename: [Function] },
      //   performance:
      //    { parent: [Circular],
      //      store: Map {},
      //      shorthands: [ 'assetFilter', 'hints', 'maxAssetSize', 'maxEntrypointSize' ],
      //      assetFilter: [Function],
      //      hints: [Function],
      //      maxAssetSize: [Function],
      //      maxEntrypointSize: [Function] },
      //   plugins:
      //    { parent: [Circular],
      //      store: Map {
      //         'vue-loader' => [Object],
      //         'define' => [Object],
      //         'case-sensitive-paths' => [Object],
      //         'friendly-errors' => [Object],
      //         'hmr' => [Object],
      //         'progress' => [Object],
      //         'html' => [Object],
      //         'copy' => [Object] } },
      //   resolve:
      //    { parent: [Circular],
      //      store: Map { 'symlinks' => true },
      //      alias: { parent: [Circular], store: [Object] },
      //      aliasFields: { parent: [Circular], store: Set {} },
      //      descriptionFiles: { parent: [Circular], store: Set {} },
      //      extensions: { parent: [Circular], store: [Object] },
      //      mainFields: { parent: [Circular], store: Set {} },
      //      mainFiles: { parent: [Circular], store: Set {} },
      //      modules: { parent: [Circular], store: [Object] },
      //      plugins: { parent: [Circular], store: Map {} },
      //      shorthands:
      //       [ 'cachePredicate',
      //         'cacheWithContext',
      //         'concord',
      //         'enforceExtension',
      //         'enforceModuleExtension',
      //         'symlinks',
      //         'unsafeCache' ],
      //      cachePredicate: [Function],
      //      cacheWithContext: [Function],
      //      concord: [Function],
      //      enforceExtension: [Function],
      //      enforceModuleExtension: [Function],
      //      symlinks: [Function],
      //      unsafeCache: [Function] },
      //   resolveLoader:
      //    { parent: [Circular],
      //      store: Map {},
      //      alias: { parent: [Circular], store: Map {} },
      //      aliasFields: { parent: [Circular], store: Set {} },
      //      descriptionFiles: { parent: [Circular], store: Set {} },
      //      extensions: { parent: [Circular], store: Set {} },
      //      mainFields: { parent: [Circular], store: Set {} },
      //      mainFiles: { parent: [Circular], store: Set {} },
      //      modules: { parent: [Circular], store: [Object] },
      //      plugins: { parent: [Circular], store: Map {} },
      //      shorthands:
      //       [ 'cachePredicate',
      //         'cacheWithContext',
      //         'concord',
      //         'enforceExtension',
      //         'enforceModuleExtension',
      //         'symlinks',
      //         'unsafeCache' ],
      //      cachePredicate: [Function],
      //      cacheWithContext: [Function],
      //      concord: [Function],
      //      enforceExtension: [Function],
      //      enforceModuleExtension: [Function],
      //      symlinks: [Function],
      //      unsafeCache: [Function],
      //      moduleExtensions: { parent: [Circular], store: Set {} },
      //      packageMains: { parent: [Circular], store: Set {} } },
      //   shorthands:
      //    [ 'amd',
      //      'bail',
      //      'cache',
      //      'context',
      //      'devtool',
      //      'externals',
      //      'loader',
      //      'mode',
      //      'parallelism',
      //      'profile',
      //      'recordsInputPath',
      //      'recordsPath',
      //      'recordsOutputPath',
      //      'stats',
      //      'target',
      //      'watch',
      //      'watchOptions' ],
      //   amd: [Function],
      //   bail: [Function],
      //   cache: [Function],
      //   context: [Function],
      //   devtool: [Function],
      //   externals: [Function],
      //   loader: [Function],
      //   mode: [Function],
      //   parallelism: [Function],
      //   profile: [Function],
      //   recordsInputPath: [Function],
      //   recordsPath: [Function],
      //   recordsOutputPath: [Function],
      //   stats: [Function],
      //   target: [Function],
      //   watch: [Function],
      //   watchOptions: [Function] }
      var i = 1;
    },
    onClickLeft() {
      var _this = this;
    },
    afterRead(file) {
      console.log(file);
    },
    onClickRight() {},
    datastructure() {
      var data =
        '{"camera":3,"files":"[{"name":"zuimei_wallpaper_473d8da0a8b13eed63df3c898fbfb2e1_334c4a4c42fdb79d7ebc3e73b517e6f8_3.jpg","objectid":"b9875633f5c9ff89183dbb1b921bbcaf","width":2160,"height":1920,"resid":418780596452237312,"type":"jpg","size":348961},{"name":"zuimei_wallpaper_6bba1362a19a4b1664ecbf2c20975398_334c4a4c42fdb79d7ebc3e73b517e6f8_3.jpg","objectid":"ca47c7c316c8b53acf65bdd4338d9ccd","width":2160,"height":1920,"resid":418784042886656000,"type":"jpg","size":465488},{"name":"RmCT9P2DgcCDJ5.jpg","objectid":"ee1f630f895a48a755b18a140b9fa36b","width":640,"height":480,"resid":418784046742409216,"type":"jpg","size":42617},{"name":"RmCAqeNHWDil0e.jpg","objectid":"a19a688b87ea589f6b150f38db5f4657","width":600,"height":337,"resid":418784050328539136,"type":"jpg","size":21395}]"}';
      data = $.parseJSON(data);
      console.log(data);
    },
    pcgetaudio() {
      var _this = this;
      var param = {
        show: 1,
        tools: [
          { name: 'cx_image', info: { camera: 3, singleImage: false } },
          { name: 'cx_camera', info: { camera: 0 } },
          { name: 'cx_video', info: { camera: 3 } }
        ]
      };
      jsBridge.unbind('CLIENT_SELECT_OPTION_BAR');
      jsBridge.postNotification('CLIENT_SELECT_OPTION_BAR', param);
      jsBridge.unbind('CLIENT_CHOOSE_IMAGE_RESULT');
      try {
        jsBridge.bind('CLIENT_CHOOSE_IMAGE_RESULT', function(object) {
          console.log('--------------------', object.files);
        });
      } catch (e) {}
    },
    onPicChange(x) {
      console.log(x);
    },
    audio() {
      var _this = this;
      jsBridge.bind('CLIENT_AUDIO_RECORD', function(object) {
        console.log(JSON.stringify(object.att_voice.objectId2));
        var url = 'http://mooc1.chaoxing.com/ananas/status/44b4957f04c3d297bee10955d3052965';
        _this.$axios.get(url).then((rsp) => {
          console.log(rsp);
        });
      });
      jsBridge.postNotification('CLIENT_AUDIO_RECORD', {});
    }
  },
  mounted() {
    var _this = this;
    var fs = require('fs');
    //var readline = require('readline');
    //var {google} = require('googleapis');
    //var OAuth2 = google.auth.OAuth2;
    var ip = '192.168.10.54';
    var port = '8080';
    var protocal = 'http://';
    var host = require('path').join(protocal, ip, port);
    var node = require('url');
    console.log('------------------',navigator.userAgent);
    // console.log(require('path').basename(__filename),'====',require('path'))
    // console.log('__dirname',__dirname,__filename);
    //_this.websocket.onopen=_this.handleopen()

  }
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 200px;
  &__float {
    width: 120%;
    height: 40px;
    flex-shrink: 0;
    overflow: scroll;
    background-color: orangered;
  }
}
.spec {
  width: 91px !important;
  height: 91px !important;
}
</style>