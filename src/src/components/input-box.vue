<template>
  <section class="damiao-input-box">
    <!-- Please enter a long link address -->
    <input
      type="text"
      class="input-box"
      placeholder="请输入长链接地址, 例如：http://xxx.xx.com.cn/xxx/aaa"
      v-model="longUrl"
    />
    <span class="input-btn" @click="getLink">CLICK</span>
  </section>
</template>

<script>
var validUrl = require("valid-url");
export default {
  data() {
    return {
      longUrl: "",
      config: {
        status: false,
        link: "",
        msg: ""
      }
    };
  },
  methods: {
    getLink() {
      this.config.status = true;
      this.config.link = this.longUrl;

      // 验证是否为空
      if (!this.longUrl.replace(/\s*/g, "") && this.config.status) {
        this.config.status = false;
        this.config.msg = "长连接内容不能为空";
      }

      // 验证是否是url
      if (!validUrl.isUri(this.longUrl) && this.config.status) {
        this.config.status = false;
        this.config.msg = "长连接内容格式错误";
      }

      this.$bus.$emit("sendLongUrl", this.config);
    }
  }
};
</script>

<style lang="stylus">
.damiao-input-box
    width:55%;height:45px;position:absolute;left:50%;top:30%;transform:translate3d(-50%,-50%,0);display:flex;border-radius:22px;box-shadow: 0 0 50px rgba(130,2,2,0.8);
.damiao-input-box .input-box
    border:none;width:100%;height:100%;background-color:#f37777;color:#fff;border-radius: 22px;text-indent: 50px;background-image: url("/images/link.png");background-repeat:no-repeat;background-position: 15px 10px;background-size:25px 25px;border:1px solid rgba(130,2,2,0.1);box-sizing: border-box;transition: all .5s;
.damiao-input-box .input-box:focus
    outline: none; border:1px solid rgba(130,2,2,0.5);
.damiao-input-box .input-box::-webkit-input-placeholder
    color:rgba(255,255,255,0.6); font-size:13px; font-weight: 200; letter-spacing: 0.5px;text-transform:Uppercase;
.damiao-input-box .input-btn
    width:20%;height:100%;background-color:#b23131;line-height:45px;text-align:center;position:absolute;right:0;top:0;border-radius: 22px;color:#ffff;cursor:pointer;box-shadow: -5px 0 10px #820202;border:1px solid #b23131; box-sizing: border-box;transition: all .5s;
.damiao-input-box .input-btn:hover
    box-shadow: -5px 0 10px rgba(130,2,2,0.5);
</style>
