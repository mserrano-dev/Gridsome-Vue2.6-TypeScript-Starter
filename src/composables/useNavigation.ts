/*
 *  EX.
 *    
 <template>
   {{ useNavigation.header }}
 </template>
 
 <script>
  export default {
   setup() {
     return {
       useNavigation,
      };
    },
    created() {
      useNavigation.loadHeaderLinks(this.$static.allHeader.edges);
    }
  };
  </script>
 */

import '../composables/installCompositionApi';
import { reactive, computed } from '@vue/composition-api';

interface NavLink {
  id: string,
  sort: number,
  title: string,
  url: string,
  parent: string,
  sublink: NavLink[],
}

interface NodeNavLink {
  node: NavLink
}

const state = reactive({}) as any;
const useNavigation = {} as any; // default export

useNavigation.get_icon = (link: NavLink) => {
  let _return = "mdi-file-document-outline";
  if (link.url.indexOf('linkedin') != -1) {
    _return = "mdi-linkedin";
  } else if (link.url.indexOf('github') != -1) {
    _return = "mdi-github";
  }
  return _return;
}

state.header = [] as NavLink[];
useNavigation.header = computed(() => state.header);
useNavigation.load_headerLinks = (list_link: NodeNavLink[]) => {
  state.header = rebuildIntoSortedTree(list_link);
};

state.sidebar = [] as NavLink[];
useNavigation.sidebar = computed(() => state.sidebar);
useNavigation.load_sidebarLinks = (list_link: NodeNavLink[]) => {
  state.sidebar = rebuildIntoSortedTree(list_link);
};

state.footer = [] as NavLink[];
useNavigation.footer = computed(() => state.footer);
useNavigation.load_footerLinks = (list_link: NodeNavLink[]) => {
  state.footer = rebuildIntoSortedTree(list_link);
};

state.mobile = [] as NavLink[];
useNavigation.mobile = computed(() => state.mobile);
useNavigation.load_mobileLinks = (list_link: NodeNavLink[]) => {
  state.mobile = rebuildIntoSortedTree(list_link);
};

// --- helpers ---

function rebuildIntoSortedTree(list_link: NodeNavLink[]): NavLink[] {
  return buildTree(list_link, "0"); // WordPress menu root depth = 0
}

function buildTree(list_link: NodeNavLink[], this_parent: String): NavLink[] {
  let _return = [] as NavLink[];
  for (var link of list_link) {
    let copy = JSON.parse(JSON.stringify(link));
    if (copy.node.parent === this_parent) {
      let children = buildTree(list_link, link.node.id);
      if (children) {
        copy.node.sublink = children;
      }
      _return.push(copy.node);
    }
  }
  _return.sort((a, b) => {
    return a.sort - b.sort;
  });
  return _return;
}

export default useNavigation;