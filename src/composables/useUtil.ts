const useUtil = {
  always_string: (val: any): string => (val != null ? val.toString().toLowerCase() : "")
};

export default useUtil;