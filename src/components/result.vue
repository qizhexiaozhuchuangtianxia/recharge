<template>
  <div>
    <div class="result">
      <div class="returns" @click="back()">
        <div class="zuIcon-back"></div>
      </div>
      <h1>操作结果</h1>
      <div class="h-right"></div>
    </div>
    <div class="result-cont">
      <div class="pay-success">
        <img src="../../static/success-icon.png" />
        <p>支付成功</p>
        <p>¥180.00</p>
      </div>
      <div class="pay-info">
        <p class="flex-between">
          <span>充值号码</span>
          <span>1529***243</span>
        </p>

        <p class="flex-between">
          <span>订单金额</span>
          <span>人民币180.00</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "result",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.result {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.02rem solid #f4f4f4;
  background-color: #ffffff;
  align-items: center;
  .h-right {
    flex: 1;
  }
  h1 {
    width: 100%;
    text-align: center;
    font-size: 0.36rem;
    flex: 1;
    font-weight: 400;
    color: #000000;
  }
  .returns {
    display: flex;
    width: 2rem;
    flex: 1;
    align-items: center;
    .back-text {
      font-size: 0.3rem;
      font-weight: 400;
      color: #000000;
      z-index: 2;
    }
    .zuIcon-back {
      font-family: zuIcon;
      padding-left: 0.2rem;
      font-size: 0.36rem;
    }
    .zuIcon-back:before {
      content: "\e679";
      color: #4a4a4a;
    }
  }
}

@font-face {
  font-family: "zuIcon";
  src: url("//at.alicdn.com/t/font_533566_yfq2d9wdij.eot?t=1545239985831");
  /* IE9 */
  src: url("//at.alicdn.com/t/font_533566_yfq2d9wdij.eot?t=1545239985831#iefix")
      format("rembedded-opentype"),
    url("//at.alicdn.com/t/font_533566_yfq2d9wdij.ttf?t=1545239985831")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url("//at.alicdn.com/t/font_533566_yfq2d9wdij.svg?t=1545239985831#cuIconfont")
      format("svg");
  /* iOS 4.1- */
}

.result-cont {
  border-top: 0.01rem solid #eeeeee;
  .pay-success {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      margin-top: 0.68rem;
      width: 0.97rem;
      height: 0.97rem;
    }
    & > p:nth-child(2) {
      color: #000000;
      margin-top: 0.34rem;
      font-size: 0.36rem;
      font-weight: 600;
    }
    & > p:nth-child(3) {
      margin-top: 0.55rem;
      font-size: 0.6rem;
      font-weight: 600;
      color: #000000;
    }
  }
  .pay-info {
    margin-top: 0.99rem;
    padding: 0 0.4rem 0 0.34rem;
    &>p:nth-child(2){
      margin-top:0.54rem;
    }
    p {
      span {
        font-size: 0.3rem;
        color: #343434;
      }
      & > span:nth-child(1) {
        font-weight: 600;
      }
      & > span:nth-child(2) {
        font-weight: 400;
      }
    }
  }
}
.flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
