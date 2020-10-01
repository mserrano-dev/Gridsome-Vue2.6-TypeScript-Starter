import '../composables/installCompositionApi';
import { reactive, computed } from '@vue/composition-api';
import Vue from "vue";

const DEVICES = ['ultra', 'lg', 'md', 'sm', 'xs'];

const state = reactive({
  isLeftDrawerOpen: true,
  css_reference: null as any,
  css_breakpoint: '',
  active_tech: {
    current: '',
  },
  tech_tooltip: {
    wrap: null as any,
    instance: null as any
  }
});

const uiState = {} as any;

// --- Sidebar ---
uiState.isLeftDrawerOpen = computed({
  get: () => state.isLeftDrawerOpen,
  set: (val) => (state.isLeftDrawerOpen = val)
});

// --- CSS Media Breakpoints ---
uiState.setUp_cssBreakpoint = ($win: HTMLBaseElement) => {
  state.css_reference = $win;
  update_cssBreakpoint()
  state.css_reference.addEventListener('resize', update_cssBreakpoint);
}
uiState.tearDown_cssBreakpoint = () => {
  state.css_reference.removeEventListener('resize', update_cssBreakpoint);
}
uiState.breakpoint_within = (list_ok: string[]) => {
  return list_ok.indexOf(state.css_breakpoint) != -1;
};
uiState.breakpoint_gt = (val: string) => {
  const rating_gt = DEVICES.indexOf(val);
  const rating_actual = DEVICES.indexOf(state.css_breakpoint);

  return rating_gt > rating_actual;
};
uiState.css_breakpoint = computed(
  () => state.css_breakpoint
);

// --- helpers ---

function update_cssBreakpoint() {
  state.css_breakpoint = get_cssBreakpoint();
}

function get_cssBreakpoint() {
  return state.css_reference.getComputedStyle(document.body, ':before')
    .content
    .replace(/\"/g, '');
}

export default uiState;