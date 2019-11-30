<template>
  <section class="damiao-content">
    <!-- 提示信息 -->
    <section class="damiao-message-text" v-show="status === 'error'">
      {{ message }}
    </section>
    <!-- 加载状态 -->
    <img
      src="/images/loading.gif"
      class="damiao-loading-img"
      v-show="status === 'loading'"
    />
    <!-- 显示短连接和二维码 -->
    <section class="damiao-clink" v-show="status === 'successed'">
      <span class="dc-link"
        >短链接：<a class="dc-link-Text" :href="shortUrl" target="__blank">{{
          shortUrl
        }}</a>
      </span>
      <span class="dc-qrcode">二维码：<i id="qrcode" ref="qrcode"></i> </span>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      status: "none", // successed | loading | none | error
      message: "这是报错信息提示文字",
      longUrl: "",
      shortUrl: "http://xxx.xx.com.cn/code",
      qrcode: null
    };
  },
  methods: {
    init() {
      // 接收事件 回调
      this.$bus.$on("sendLongUrl", config => {
        // console.log(config);
        if (config.status) {
          this.status = "loading";
          // 获取长链接字符串
          this.longUrl = config.link;
          // 请求接口 获取短链接
          this.requestShortUrl();
        } else {
          this.status = "error";
          this.message = config.msg;
        }
      });
    },
    requestShortUrl() {
      // 清除二维码
      this.$refs.qrcode.innerHTML = "";
      // 请求短链接
      fetch("http://127.0.0.1/api/url/shorten", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          longUrl: this.longUrl
        })
      })
        .then(res => res.json())
        .then(res => {
          let link = "http://127.0.0.1/" + res.urlCode;
          // 赋值 短链接
          this.shortUrl = link;
          // 获取状态
          this.status = "successed";
          // 二维码
          this.qrcode = new window.QRCode(this.$refs.qrcode, {
            text: this.shortUrl,
            width: 150,
            height: 150
          });
        });
    }
  },
  created() {
    this.init();
  },
  mounted() {}
};
</script>

<style lang="stylus">
.damiao-content
    width:55%;height:auto;position:absolute;left:52%;top:45%;transform: translate3d(-50%, -50%, 0);display:block;
.damiao-content span
    display: block; width:100%;height:50px;line-height:50px;position: relative;color:#b23131;background-repeat: no-repeat;background-size:20px 20px;text-indent: 30px;background-position: 0 13px;
.damiao-content span em
    font-style: normal;text-decoration: underline;
.damiao-content span a
    color:#333; transition: .5s;
.damiao-content span a:hover
    color:#b23131;
.damiao-content span img
    width:100%;height:100%;border:10px solid #fff;
.damiao-content span #qrcode
    position: absolute;left:95px;top:15px;width:150px;height:150px;
.damiao-content span canvas
    width:150px;height:150px;
.damiao-content span.dc-link
    background-image: url('/images/link_icon.png');
.damiao-content span.dc-qrcode
    background-image: url('/images/qr_code.png');
.damiao-content .damiao-message-text
    width:100%;height:80px;line-height:80px;text-align:center;text-indent:-7%;font-size:22px;position:absolute;left:0;top:0;color:#f37777;
.damiao-content .damiao-loading-img
    position:absolute;left:46%;top:0;transform:translate3d(-50%,0,0);width:30px;
</style>
