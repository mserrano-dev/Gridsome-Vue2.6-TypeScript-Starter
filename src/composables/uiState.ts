import '../composables/installCompositionApi';
import { reactive, computed } from '@vue/composition-api';

const state = reactive({
  isLeftDrawerOpen: true,
});

const isLeftDrawerOpen = computed(() => state.isLeftDrawerOpen);
const toggleLeftDrawer = () => {
  state.isLeftDrawerOpen = !state.isLeftDrawerOpen;
};

const uiState = {
  isLeftDrawerOpen,
  toggleLeftDrawer,
};

export default uiState;