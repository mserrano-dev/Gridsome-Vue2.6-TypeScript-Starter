<template>
  <v-navigation-drawer class="sidebar z-50" app clipped v-model="uiState.isLeftDrawerOpen">
    <div class="pb-40">
      <g-link to="/">
        <v-list-item>
          <v-list-item-content class="sidebar__header">
            <v-list-item-title class="title">Mark Anthony Serrano</v-list-item-title>
            <v-list-item-subtitle>Software Engineer</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </g-link>

      <v-divider></v-divider>

      <v-list nav class="sidebar__content">
        <g-link class="depth1" to="/contact/">
          <v-list-item class="sidebar__list-item" link>
            <v-list-item-content>
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon>mdi-email-edit</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </g-link>
        <g-link class="depth1" to="/resume/">
          <v-list-item class="sidebar__list-item" link>
            <v-list-item-content>
              <v-list-item-title>Resume</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon>mdi-text-box</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </g-link>
        <g-link class="depth1" to="/projects/">
          <v-list-item class="sidebar__list-item" link>
            <v-list-item-content>
              <v-list-item-title>Portfolio</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </g-link>
        <v-list shaped class="depth2-container" v-if="show_listProjects">
          <v-list-item link dense v-for="project in useProject.list_project" :key="project.title">
            <v-list-item-content>
              <g-link class="depth2" :to="`/projects/${ project.slug }`">
                <v-list-item-title class="text-xs">{{ project.general.title }}</v-list-item-title>
              </g-link>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <!-- <g-link class="depth1" to="/creative/">
        <v-list-item class="sidebar__list-item" link>
          <v-list-item-content>
            <v-list-item-title>Creative Work</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>mdi-palette</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </g-link>
      <g-link class="depth1" to="/entrepreneurship/">
        <v-list-item class="sidebar__list-item" link>
          <v-list-item-content>
            <v-list-item-title>Entrepreneurship</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>mdi-domain</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </g-link>
      <g-link class="depth1" to="/blog/">
        <v-list-item class="sidebar__list-item" link>
          <v-list-item-content>
            <v-list-item-title>Dev's Log</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>mdi-comment-text-multiple</v-icon>
          </v-list-item-icon>
        </v-list-item>
        </g-link>-->
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<style lang="scss">
.sidebar {
  background: #f2f2f2 !important;
}
.sidebar__header {
  margin: 15px auto;
}
.sidebar__content {
  text-align: right;
  $active-bar-width: 4px;
  $active-bar-height: 1.4rem;
  .depth2-container {
    padding-right: 2px !important;

    .depth2 {
      color: inherit;
    }
    .v-list-item--dense {
      min-height: 17px;

      .v-list-item__content {
        padding: 0px 0px;
      }
    }
  }
  .depth1.active .v-list-item__icon,
  .depth2.active .v-list-item__title {
    padding-right: 20px;
  }
  .depth1,
  .depth2 {
    &.active {
      color: $blue;
      display: block;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        background-color: $yellow;
        transform: translateY(-50%);
        top: 50%;
        height: $active-bar-height;
        width: $active-bar-width;
      }
    }
  }
  .depth1.active:after {
    right: 10px;
  }
  .depth2.active:after {
    right: 0;
  }
}
</style>

<script>
import useProject from "../composables/useProject";
import uiState from "../composables/uiState";

export default {
  setup() {
    return {
      useProject,
      uiState
    };
  },
  computed: {
    show_listProjects() {
      return !!this.$route.params.slug; // only show on project details page
    }
  }
};
</script>