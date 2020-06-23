<template>
  <v-navigation-drawer :value="uiState.isLeftDrawerOpen" app>
    <v-list dense>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Open Temporary Drawer</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import uiState from "../composables/uiState";

export default {
  setup() {
    return {
      uiState,
    };
  }
};
</script>