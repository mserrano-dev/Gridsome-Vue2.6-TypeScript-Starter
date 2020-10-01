<template>
  <v-app>
    <NavHeader></NavHeader>

    <NavSidebar></NavSidebar>

    <v-main>
      <slot />
    </v-main>

    <NavFooter></NavFooter>
  </v-app>
</template>

<script>
import NavHeader from "../components/NavHeader";
import NavSidebar from "../components/NavSidebar";
import NavFooter from "../components/NavFooter";

export default {
  components: {
    NavHeader,
    NavSidebar,
    NavFooter,
  },
};
</script>