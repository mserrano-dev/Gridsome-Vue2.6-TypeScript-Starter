<template>
  <v-container class="searchProject">
    <v-autocomplete
      v-model="useProject.typeahead.selected_tags"
      :items="useProject.typeahead.items"
      :filter="useProject.typeahead.filter"
      item-text="title"
      item-value="title"
      label="Filter by language, company, or search project title/descriptions"
      multiple
      chips
    >

      <!-- typeahead Dropdown Item -->
      <template v-slot:item="{ parent, item }">
        <v-row 
          align="center" justify="space-between">
          <searchChip v-bind:item="item"></searchChip>
          <v-spacer></v-spacer>
          <v-checkbox v-bind:value="useProject.typeahead.is_active(item.title)"></v-checkbox>
        </v-row>
      </template>

      <!-- In the Search Bar -->
      <template v-slot:selection="data">
        <searchChip v-bind:item="data.item"></searchChip>
      </template>

    </v-autocomplete>
  </v-container>
</template>

<style lang="scss">
.searchProject {
  max-width: 600px;
}
.v-list .v-list-item.primary--text {
  color: white !important;
}
.v-list .v-list-item.primary--text.v-list-item--active {
  color: rgba(black, .25) !important;
}
</style>

<script>
import searchChip from "../components/searchChip";
import useProject from "../composables/useProject";

export default {
  setup() {
    return {
      useProject
    };
  },
  components: {
    searchChip
  },
};
</script>