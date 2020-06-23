<template>
  <Layout>
    <searchProject></searchProject>

    <cardProject 
      v-for="item in useProject.list_project" 
      v-bind:key="item.title"
      v-bind:item="item"></cardProject>
  </Layout>
</template>

<static-query>
query {
  allProjects {
    edges {
      node {
        title
        description
        sort
        projectDate
        projectWorkplace
        projectVideo
        projectScreenshots
        projectRepo
      }
    }
  }
}
</static-query>


<script>
import searchProject from "../components/searchProject";
import cardProject from "../components/cardProject";
import useProject from "../composables/useProject";

export default {
  setup() {
    return {
      useProject,
    }
  },
  created() {
    useProject.loadProjects(this.$static.allProjects.edges);
  },
  components: {
    searchProject,
    cardProject,
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>