import '../composables/installCompositionApi';
import useUtil from '../composables/useUtil';
import { reactive, computed } from '@vue/composition-api';

interface Project {
  header?: string,
  title?: string,
  description?: string,
  sort?: number,
  projectDate?: string,
  projectWorkplace?: string,
  projectVideo?: string,
  projectScreenshots?: string,
  projectRepo?: string,
}

interface NodeProject {
  node: Project
}

interface ProjectStateManagement {
  typeahead: {
    selected_tags: string[],
    items: Project[],
    filter: any,
  },
  list_project: Project[],
}

const state = reactive({
  typeahead: {
    selected_tags: [] as Project[],
    items: [] as Project[],
  },
}) as ProjectStateManagement;
const useProject = {} as any; // default export

useProject.list_project = computed(() => state.list_project);
useProject.typeahead = {
  selected_tags: computed({
    get: () => { return state.typeahead.selected_tags },
    set: (val) => { state.typeahead.selected_tags = val; }
  }),
  items: computed(() => state.typeahead.items),
  filter: (item: any, queryText: string, itemText: string): boolean => {
    if (item.header) return false;

    const title = useUtil.always_string(item.title);
    const query = useUtil.always_string(queryText);

    return (
      (title.indexOf(query) > -1)
    );
  },
  is_active: (title: string) => {
    return (state.typeahead.selected_tags.indexOf(title) > -1);
  }
};

useProject.syncSelectedTags = (new_selection: string[]): void => {
  state.typeahead.selected_tags = new_selection;
};

useProject.loadProjects = (list_project: NodeProject[]) => {
  let _return = [];
  for (var obj of list_project) {
    _return.push(obj.node);
    // const item = useUtil.always_string(obj.node.title);
    state.typeahead.items.push(obj.node);
  }
  state.list_project = _return;
};

export default useProject;