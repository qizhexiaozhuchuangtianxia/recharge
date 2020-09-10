<template>
  <div  v-if="isShow" class="zu-transition">
    <slot name="cont" class="zu-transition-content"> </slot>
  </div>
</template>

<script>
export default {
  name: "transition",
  data() {
    return{

    }
  },
   props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    console.log(this.isShow,'isShow')
  },
};
</script>
<style lang="less" >
.zu-transition {
  width: 100%;
  height: 100%;
  background: #000000;
   background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 9;
 display: flex;
    align-items: center;
    justify-content: center;
}
</style>