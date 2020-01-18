<template>
  <div>
    <button @click="change">{{buttonName}}vgfdvdfs</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonName: "点击按钮"
    };
  },
  methods: {
    change() {
      console.log(111);
    }
  }
};