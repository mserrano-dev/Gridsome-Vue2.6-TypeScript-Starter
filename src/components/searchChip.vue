<template>
  <v-chip
    :key="JSON.stringify(item)"
  >
    <v-avatar
      class="secondary white--text"
      left
      v-text="get_text(item)"
    ></v-avatar>
    {{ item.title }}
  </v-chip>
</template>

<script>
export default {
  props: {
    "item": Object|String
  },
  methods: {
    "get_text": (item) => {
      let _return = item;
      if(item.title) {
        _return = item.title;
      }
      return _return.slice(0, 1).toUpperCase();
    }
  }
};
</script>