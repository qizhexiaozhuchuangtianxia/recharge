<template>
  <div class="wrapper">
    <transition :isShow="isShow">
      <div class="pop" slot="cont">
        <img
          class="tran-close"
          @click="isShow = false"
          src="../../static/close_icon.png"
        />
        <div class="tran-prp">
          <div class="tran-success-text ">
            <img class="text-img" src="../../static/pop-success-icon.png" />
            <span>领取成功</span>
          </div>
          <div class="tran-btn-cont">
            <div class="tran-btn">
              立即充值
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition :isShow="isRuleShow">
      <div class="pop" slot="cont">
        <img
          class="tran-close"
          @click="isRuleShow = false"
          src="../../static/close_icon.png"
        />
        <div class="tran-prp-rule">
          <div class="tran-rule-text ">
            <img class="tran-bj-rule" src="../../static/role_bj.png" />
            <div class="tran-rule-cont">
              <h4>
                活动规则
              </h4>
              <div class="tran-rule-text">
                <div>活动主题：投资赠礼-话费充值立减20！</div>
                <div>活动时间：即日起至2020年12月31日</div>
                <div>活动对象：中国银行手机银行特邀用户(吉林地区)</div>
                <div>活动提示：</div>
                <div>1、活动期间符合条件的新用户可领取20元话费抵用券；</div>
                <div>2、话费抵用券可在话费充值时抵扣使用；</div>
                <div>3、充值金额最晚于24小时内到账，如有延</div>
              </div>
              <div class="tran-rule-btn-cont">
                <div class="tran-rule-btn">
                  我已经了解
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="header">
      <div class="returns" @click="back()">
        <div class="zuIcon-back"></div>
        <div class="back-text">返回</div>
      </div>
      <h1>投资赠礼</h1>
      <div class="h-right"></div>
    </div>
    <div class="home-cont">
      <div class="cont-top">
        <img @click="handleClick('order')" src="../../static/order_icon.png" />
        <img @click="isRuleShow = true" src="../../static/rule_icon.png" />
      </div>
      <div class="home-banner">
      <!-- <img class="home-banner" src="../../static/re_banner.png" /> -->

      </div>
      <div class="receive-btn" @click="isShow = true">
        <span class="receive-txt">立即领取</span>
        <img class="receive-btn-icon" src="../../static/btn_icon.png" />
      </div>
      <div class="cont-input-cont">
        <input
          type="text"
          class="case-input"
          placeholder="营销代码：非必填项"
        />
        <img src="../../static/case_icon.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Transition from "./common/transition";
export default {
  name: "index",
  components: {
    Transition
  },
  data() {
    return {
      isRuleShow: false,
      isShow: false
    };
  },
  methods: {
    handleClick(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper{
  position: relative;
height:100%;
}
.header {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.02rem solid #f4f4f4;
  background-color: #ffffff;
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

.home-cont {
  position: relative;
  top:0;
  width: 100%;
  height: calc(100% - 1rem);
  .cont-top {
    position: absolute;
    top: 0;
    width:7.06rem;
    padding: 0 0.22rem 0 0.22rem;
    z-index: 1;
    font-size: 0;
    display: flex;
    justify-content: space-between;
    img {
      height: 1rem;
    }
  }
  .home-banner {
    position: absolute;
    top: 0;
    width: 7.5rem;
    background: url(../../static/re_banner.png) no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }
  .receive-btn {
    position: absolute;
    top: 6.5rem;
    left: 2.3rem;
    width: 2.84rem;
    height: 0.82rem;
    display: flex;
    img {
      position: absolute;
      width: 2.84rem;
      height: 0.82rem;
    }
    .receive-txt {
      position: absolute;
      width: 2.84rem;
      height: 0.82rem;
      font-size: 0.3rem;
      font-weight: bold;
      color: #723e06;
      z-index: 2;
      text-align: center;
      line-height: 0.82rem;
    }
  }
  .cont-input-cont {
    position: relative;
    top: 9rem;
    left: 1rem;
    width: 2.84rem;
    height: 0.82rem;
    display: flex;
    img {
      width: 5.49rem;
      height: 0.94rem;
      position: absolute;
    }
    .case-input {
      position: absolute;
      z-index: 1;
      left: 0.2rem;
      width: 5rem;
      height: 0.6rem;
      top: 0.15rem;
      font-size: 0.28rem;
      font-weight: 400;
      color: #9a9a9a;
      background: rgba(255, 255, 255, 0);
    }
  }
}
.join-nav-bar-cont {
  color: #000000;
  font-size: 0.36rem;
  font-weight: 400;
}
.pop {
  width: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .tran-close {
    width: 0.68rem;
    height: 0.68rem;
  }

  .tran-prp {
    width: 5rem;
    height: 4rem;
    background: #ffffff;
    border-radius: 0.2rem;
    margin-top: 0.34rem;
    .tran-success-text {
      border-bottom: 0.01rem solid #f4f4f4;
      display: flex;
      flex-direction: column;
      align-items: center;
      display: flex;
      justify-content: center;
      align-items: center;
      .text-img {
        margin-top: 0.34rem;
        width: 1.08rem;
        height: 1.08rem;
      }
      span {
        margin: 0.3rem 0 0.37rem 0;

        font-size: 0.34rem;
        font-weight: 400;
        color: #4ea7f8;
      }
    }
    .tran-btn-cont {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.45rem;
      .tran-btn {
        width: 2.78rem;
        height: 0.6rem;
        background: #00a8ff;
        border-radius: 0.26rem;
        text-align: center;
        color: #ffffff;
        font-size: 0.34rem;
        font-weight: 400;
        line-height: 0.6rem;
      }
    }
  }
  .tran-prp-rule {
    width: 5.56rem;
    height: 6.93rem;
    margin-top: 0.34rem;
    .tran-rule-text {
      width: 5.56rem;
      height: 6.93rem;
      .tran-bj-rule {
        position: absolute;
        width: 5.56rem;
        height: 6.93rem;
        opacity: 0.9;
      }
      position: relative;
      .tran-rule-cont {
        position: absolute;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 5.3rem;
        padding: 0.53rem 0.18rem 0.25rem 0.18rem;
        h4 {
          font-size: 0.6rem;
          font-weight: 400;
          color: #fdfaf9;
        }
        .tran-rule-text {
          background: #ffffff;
          border-radius: 0.2rem;
          width: 4.3rem;
          margin-top: 0.4rem;
          height: 3.5rem;
          padding: 0.3rem;
          div {
            margin-top: 0.1rem;
            font-size: 0.22rem;
            font-weight: 400;
            color: #333333;
          }
        }
        .tran-rule-btn-cont {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.2rem;
          .tran-rule-btn {
            width: 5rem;
            height: 0.77rem;
            background: #00a8ff;
            border-radius: 0.39rem;
            text-align: center;
            color: #ffffff;
            font-size: 0.3rem;
            font-weight: 400;
            line-height: 0.77rem;
          }
        }
      }
    }
  }
}
</style>
