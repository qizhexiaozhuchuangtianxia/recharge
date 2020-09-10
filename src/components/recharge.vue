<template>
  <div class="wrapper">
    <div class="recharge">
      <div class="returns" @click="back()">
        <div class="zuIcon-back"></div>
      </div>
      <h1>话费充值</h1>
      <div class="h-right"></div>
    </div>
    <div class="recharge-cont">
      <div class="recharge-num">
        <span>号码</span>
        <span>1529***243</span>
      </div>
      <div class="recharge-tip">账号绑定号码（北京电信）</div>
      <div class="recharge-money">
        <p class="recharge-text">充值金额</p>
        <ul class="">
          <li
            v-for="(item, index) in moneyList"
            :key="index"
            :class="{
              noActivation: isActivationIndex !== item.index,
              activation: isActivationIndex == item.index
            }"
            @click="handleClick(index)"
          >
            {{ item.money }}
          </li>
        </ul>
      </div>
      <div class="recharge-texts">
        <div>活动提示：</div>
        <div>1、活动时间为即日起至2020年12月31日</div>
        <div>2、话费抵用券可在本次话费充值时抵扣使用</div>
        <div>3、充值金额最晚于24小时内到账，如有延迟，请您耐心等候</div>
        <div>4、本服务暂不提供充值发票</div>
        <div>
          5、通过不当途径参加本活动的客户，中国银行有权终止该客户参加活动的权利并取消其参与资格，凡参与活动的客户，即视为接受活动所有规则，在法律范围内的最终解释权归中国银行所有
        </div>
        <div>
          6、该活动由第三方公司北京中科道格科技有限公司提供服务，活动中如遇问题请拨打客服电话010-50987863（工作时间9:00-18:00，周末及国家法定节假日除外）
        </div>
      </div>
      <div class="recharge-pay">
        <div class="recharge-btn" @click="isPopShow = true">
          <span class="recharge-btn-pay">立即付款</span>
          <span class="recharge-btn-card">
            （已使用抵扣券20元）
          </span>
        </div>
      </div>
    </div>

    <div class="pop-up" v-if="isPopShow">
      <div class="pop-up-cont">
        <p class="pop-header">
          <img src="../../static/close-icon1.png" @click="isPopShow = false" />
          <span>付款详情</span>
          <span></span>
        </p>
        <p class="pop-money">¥180.00</p>
        <div class="pay-info">
          <p class="flex-between">
            <span>付款说明</span>
            <span>话费充值1529***243</span>
          </p>

          <p class="flex-between">
            <span>付款账户</span>
            <span>长城电子借记卡(0201)</span>
          </p>
          <p class="flex-between">
            <span>安全工具</span>
            <span>手机交易码</span>
          </p>
        </div>
        <div class="pop-up-btn">
          立即付款
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recharge",
  data() {
    return {
      isPopShow: false,
      isActivationIndex: 3,
      moneyList: [
        {
          money: "30元",
          index: 0
        },
        {
          money: "50元",
          index: 1
        },
        {
          money: "100元",
          index: 2
        },
        {
          money: "200元",
          index: 3
        },
        {
          money: "300元",
          index: 4
        },
        {
          money: "500元",
          index: 5
        }
      ]
    };
  },
  methods: {
    handleClick(index) {
      this.isActivationIndex=index
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper{
  width: 100%;
height:100%;
}
.recharge {
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

.recharge-cont {
  position: absolute;
  top: 1rem;
  width: 100%;
  .recharge-num {
    border-top: 0.1rem #f0eff5 solid;
    height: 1.2rem;
    display: flex;
    align-items: center;
    span {
      color: #000000;
      font-weight: 400;
    }
    & > span:nth-child(1) {
      margin-left: 0.19rem;
      font-size: 0.24rem;
      
    }
    & > span:nth-child(2) {
      margin-left: 0.65rem;
      font-size: 0.36rem;
    }
  }
  .recharge-tip {
    display: flex;
    align-items: center;
    height: 0.83rem;
    font-size: 0.24rem;
    font-weight: 400;
    background: #f0eff5;
    padding-left: 0.2rem;
    color: #93969d;
  }
  .recharge-money {
    height: 3.77rem;
    padding: 0.37rem 0.21rem 0.45rem 0.21rem;
    .recharge-text {
      font-size: 0.28rem;
      font-weight: 400;
      color: #000000;
    }
    ul {
      flex-wrap: wrap;
      justify-content: space-between;
      display: flex;
      li {
        margin-top: 0.2rem;
        width: 2.2rem;
        height: 1.1rem;
        line-height: 1.1rem;
        text-align: center;
        font-weight: bold;
        font-family: Arial;
        font-size: 0.4rem;
        border-radius: 0.08rem;
      }
      .noActivation {
        background: #f4f5f7;
        color: #666666;
      }
      .activation {
        background: #00a8ff;
        color: #ffffff;
      }
    }
  }
}
.flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.recharge-pay {
  display: flex;
  justify-content: center;
  padding-bottom: 0.72rem;
}
.recharge-btn {
  width: 7.1rem;
  height: 1.08rem;
  border-radius: 0.54rem;
  background-color: #00a8ff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.recharge-btn-pay {
  font-size: 0.36rem;
  color: #fff;

  font-weight: 600;
}
.recharge-btn-card {
  font-weight: 600;
  font-size: 0.36rem;
  color: #c40000;
}
.recharge-texts {
  padding: 0.3rem 0.2rem 1.38rem 0.2rem;
  border-top: 0.2rem solid #f0eff5;

  div {
    font-size: 0.24rem;
    font-weight: 400;
    color: #666666;
    line-height: 0.48rem;
  }
}
.pop-up {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);

  .pop-up-cont {
    width: 7.02rem;
    height: 8.72rem;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #fff;
    padding: 0 0.21rem 0 0.27rem;
    .pop-header {
      height: 1.18rem;
      border-bottom: 0.01rem solid #eeeeee;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 0.29rem;
        height: 0.29rem;
      }
      span {
        font-size: 0.36rem;
        font-weight: bold;
        color: #000000;
      }
    }
    .pop-money {
      margin-top: 0.67rem;
      font-size: 0.72rem;
      font-weight: 600;
      color: #000000;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .pay-info {
      margin-top: 0.99rem;
      p {
        border-bottom: 0.01rem solid #eeeeee;
        height: 0.9rem;
        line-height: 0.9rem;
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
    .pop-up-btn {
      width: 7.1rem;
      height: 1.08rem;
      background: #00a8ff;
      border-radius: 0.54rem;
      text-align: center;
      font-size: 0.36rem;
      font-weight: 600;
      line-height: 1.08rem;
      color: #ffffff;
      margin-top: 0.8rem;
    }
  }
}
</style>
