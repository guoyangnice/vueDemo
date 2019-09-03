<template>
  <div class="counter">
    <div>
      <span>{{index}}:</span>
      <button @click="add()" >+</button>
      <span>{{count}}</span>
      <button @click="reduce()">-</button>
    </div>
  </div>
</template>

<script>

import store from "@/store/store";
export default {
  name: "Counter",
  store,
  props:{
    index:Number
  },
  computed: {
    count() {
      return this.$store.getters.getCounters(this.index);
    }
  },
  methods:{
    add(){
      this.$store.commit("updateCountersByIndex", {
        index: this.index,
        value: this.count + 1
      });
    },
    reduce(){
      this.$store.commit("updateCountersByIndex", {
        index: this.index,
        value: this.count - 1
      });
    }
  }
};
</script>
<style>
</style>
