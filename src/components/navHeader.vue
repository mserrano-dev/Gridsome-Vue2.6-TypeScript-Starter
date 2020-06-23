<template>
  <v-app-bar app clipped-right color="#006bb6" dark hide-on-scroll>
    <v-app-bar-nav-icon @click.stop="uiState.toggleLeftDrawer()" />
    <v-toolbar-title>
      <!-- <v-btn color="transparent" elevation="0" href="/">Mark Anthony Serrano</v-btn> -->
    </v-toolbar-title>
    <v-spacer />
    <v-tooltip bottom v-for="link in useNavigation.header" sort-by="sort" v-bind:key="link.id">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="transparent"
          dark
          elevation="0"
          target="_blank"
          v-bind:href="link.url"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>{{ useNavigation.get_icon(link) }}</v-icon>
        </v-btn>
      </template>
      <span>{{ link.url | basename }}</span>
    </v-tooltip>
  </v-app-bar>
</template>

<static-query>
query {
  allHeader {
    edges {
      node {
        id
        sort
        title
        url
        parent
      }
    }
  }
}
</static-query>

<script>
import uiState from "../composables/uiState";
import useNavigation from "../composables/useNavigation";

export default {
  setup() {
    return {
      useNavigation,
      uiState
    };
  },
  created() {
    useNavigation.load_headerLinks(this.$static.allHeader.edges);
  }
};
</script>