<template>
  <div id="app">
    <input v-model.number="num" v-on:input="getNum" />
    <Counter v-for="n in parseInt(num)" v-bind:key="n" v-bind:index="n" />
    <p>{{sum}}</p>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";

export default {
  name: "app",
  components: {
    Counter
  },
  data() {
    return {
      num: 0
    };
  },
  computed: {
    sum() {
      return this.$store.getters.getSum;
    }
  },
  methods: {
    getNum() {
      this.$store.commit("updateNum", parseInt(this.num));
    }
  }
};
</script>

<style>

</style>
