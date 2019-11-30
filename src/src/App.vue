<template>
  <div id="page-box">
    <!-- 标题 -->
    <h3 class="damiao-title" ref="dtitle">短链接生成平台</h3>
    <!-- 输入表单 -->
    <InputBox></InputBox>
    <!-- 短链接展示盒子 -->
    <ResultBox></ResultBox>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import InputBox from "./components/input-box.vue";
import ResultBox from "./components/result-box.vue";

export default {
  name: "app",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const oTitle = this.$refs.dtitle;
      let oText = "";

      // 色彩
      let fontColors = [
        { fontColor: "#c44032", shadowColor: "#5e1f18" },
        { fontColor: "#c93929", shadowColor: "#872e24" },
        { fontColor: "#c14234", shadowColor: "#832c23" },
        { fontColor: "#cd4f41", shadowColor: "#923228" },
        { fontColor: "#da5d4f", shadowColor: "#ac3e31" },
        { fontColor: "#ea6252", shadowColor: "#bd4537" },
        { fontColor: "#f46655", shadowColor: "#bf4334" }
      ];

      // 着色器 设置颜色和3D阴影效果
      function setColor(fontColors) {
        oText = "";
        oTitle.innerText.split("").forEach((text, index) => {
          let color = fontColors[index];
          oText += `<span style="color:${color.fontColor};text-shadow: 0px 0px 0 ${color.shadowColor}, 0px 0px 3px ${color.shadowColor},  0px 0px 6px ${color.shadowColor}, 0px 0px 9px ${color.shadowColor}, 0px 0px 12px ${color.shadowColor};">${text}</span>`;
        });

        oTitle.innerHTML = oText;
      }
      setColor(fontColors);

      // 循环跑马灯颜色
      setInterval(() => {
        fontColors.unshift(fontColors.pop());
        setColor(fontColors);
      }, 100);
    }
  },
  components: {
    // HelloWorld
    InputBox,
    ResultBox
  }
};
</script>

<style lang="stylus">
*
  margin 0
  padding 0

html,body
  width 100%
  height 100%

#page-box
  font-family 'Avenir', Helvetica, Arial, sans-serif
  width 100%
  height 100%
  position relative;
  background-color #fcd8d4;

.damiao-title
  width:100%;
  height:80px;
  line-height: 80px;
  text-align: center;
  font-size: 55px;
  position: relative;
  top: 10%;
  letter-spacing: 5px;
  color:#fcd8d4;
  text-shadow: 0px 0px 0 #b23131, 0px 0px 3px #b23131,  0px 0px 6px #b23131, 0px 0px 9px #b23131, 0px 0px 12px #b23131;
</style>
