<template>
  <div class="card" v-bind:class="{
      active: isActive,
    }">
    {{ message }}
    <button class="bg-yellow-400 py-1 px-4" @click="onClick">Change</button>
  </div>
</template>

<script>
// import { UserProfile } from "../modules/singleton";
import { test } from "../store/modules/test";

export default {
  name: "Card",
  data() {
    return {
      message: "Try change me!",
      isActive: false
    };
  },
  methods: {
    onClick() {
      this.message = "Here you go :)";
      this.isActive = !this.isActive;
      console.log(this.$store.getters.email);
      this.$store.dispatch("updateEmail");
      console.log(this.$store.getters.email);
    }
  }
};
</script>

<style lang="scss">
$color: beige;
.card {
  padding: 20px;
  background: $color;
}
.card.active {
  background: $purple;
}
</style>
