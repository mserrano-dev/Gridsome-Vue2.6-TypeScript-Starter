<template>
<div class="cardProject">
  <div>{{ item.title }}</div>
  <div>{{ item.description }}</div>
</div>
</template>

<style lang="scss">
  .cardProject {
    margin-bottom: 20px;
  }
</style>

<script>
import useProject from "../composables/useProject";

export default {
  setup() {
    return {
      useProject,
    };
  },
  props: ['item'],
  created() {
    // console.log(useProject.list_project.value, '???')
  },
};
</script>