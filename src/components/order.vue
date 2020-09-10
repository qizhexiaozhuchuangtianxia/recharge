<template>
  <div>
    <div class="order">
      <div class="returns" @click="back()">
        <div class="zuIcon-back"></div>
      </div>
      <h1>我的订单</h1>
      <div class="h-right"></div>
    </div>
    <div class="order-cont">
      <div class="order-tab">
        <p
          v-for="(item, index) in tab"
          :key="index"
          :class="{
            noActivation: isActivationIndex !== item.index,
            activation: isActivationIndex == item.index
          }"
          @click="handleClick(index)"
        >
          {{ item.name }}
        </p>
      </div>
      <div class="order-list">
        <p class="order-time">03月27日 星期五</p>
        <div class="list-conts">
          <img src="../../static/phone_icon.png" />
          <div class="list-r">
            <p class="flex-between">
              <span class="sizeb">20元话费充值</span>
              <span class="sizeb">已支付</span>
            </p>
            <p class="flex-between">
              <span class="sizes">已使用20元抵扣券</span>
              <span></span>
            </p>
            <p class="flex-between">
              <span class="sizes">
                订单号：12345678
              </span>
              <span class="money-text sizes">
                ¥180
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
      isActivationIndex: 0,
      tab: [
        {
          name: "全部",
          index: 0
        },
        {
          name: "未支付",
          index: 1
        }
      ]
    };
  },
  methods: {
    handleClick(index) {
      this.isActivationIndex = index;
    }
  }
};
</script>
<style lang="less" scoped>
.order {
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

.order-cont {
  position: absolute;
  top: 1rem;
  width: 100%;
  .order-tab {
    height: 1.1rem;
    background: #f9f9f9;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      line-height: 1.1rem;
      height: 1.1rem;
      text-align: center;
      width: 2.1rem;
      font-size: 0.3rem;
      font-weight: 500;
      color: #666666;
    }
    .noActivation {
      border-bottom: 0.02rem #fff solid;
    }
    .activation {
      border-bottom: 0.02rem #4ea8f8 solid;
    }
  }
  .order-list {
    padding: 0.17rem 0.28rem 0.3rem 0.19rem;
    .order-time {
      font-size: 0.26rem;
      font-weight: 400;
      color: #9a9a9a;
    }
    .list-conts {
      display: flex;
      padding: 0.37rem 0 0 0.32rem;
      img {
        width: 0.84rem;
        height: 0.84rem;
        margin: 0.05rem 0.41rem 0 0;
      }
      .list-r {
        flex: 1;
        & > p:nth-child(2) {
          margin-top: 0.2rem;
        }
        & > p:nth-child(3) {
          margin-top: 0.41rem;
        }
        .sizes {
          font-size: 0.26rem;
        }
        .sizeb {
          font-size: 0.3rem;

          color: #343434;
        }
        span {
          color: #9a9a9a;
          font-weight: 400;
        }
        .money-text {
          color: #d90503;
        }
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
