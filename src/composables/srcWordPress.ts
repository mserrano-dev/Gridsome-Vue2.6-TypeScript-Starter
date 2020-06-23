import { reactive, computed } from '@vue/composition-api';

export default function useWordPress() {
  const state = reactive({
    loading: false,
    PageInfo: {},
    NavInfo: {},
  });
  
  const loading = computed(() => state.loading);
  const getPageInfo = () => {
    console.log('getting page info')
  };
  
  const getNavInfo = () => {
    console.log('getting nav info')
  };
  
  const useWordPress = {
    loading,
    getPageInfo,
    getNavInfo,
  };
};