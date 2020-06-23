<template>
  <v-app>
    <navHeader></navHeader>

    <navSidebar></navSidebar>

    <v-content>
      <slot />
    </v-content>

    <navFooter></navFooter>
  </v-app>
</template>

<script>
import navHeader from "../components/navHeader";
import navSidebar from "../components/navSidebar";
import navFooter from "../components/navFooter";

export default {
  components: {
    navHeader,
    navSidebar,
    navFooter,
  },
};
</script>