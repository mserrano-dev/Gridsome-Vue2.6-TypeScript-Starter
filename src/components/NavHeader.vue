<template>
  <v-app-bar class="navHeader border-b-8"
    app 
    clipped-left 
    dark
    color="#006bb6">
    <v-app-bar-nav-icon @click.stop="uiState.isLeftDrawerOpen = !uiState.isLeftDrawerOpen" />
    <v-toolbar-title>
      <!-- <v-btn color="transparent" elevation="0" href="/">Mark Anthony Serrano</v-btn> -->
    </v-toolbar-title>
    <v-spacer />
    <!-- <v-tooltip bottom v-for="link in header_navLink.list_link" sort-by="sort" v-bind:key="link.id"> -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="transparent"
          dark
          elevation="0"
          target="_blank"
          v-bind:href="`/contact`"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-file-document-outline</v-icon>
        </v-btn>
      </template>
      <span>Resume</span>
    </v-tooltip>
  </v-app-bar>
</template>

<style lang="scss">
  .navHeader {
    border-color: $yellow !important;
    z-index: 50 !important;
  }
</style>

<script>
import uiState from "../composables/uiState";

export default {
  setup() {
    return {
      uiState
    };
  },
};
</script>