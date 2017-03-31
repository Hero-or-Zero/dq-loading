import DqLoading from './src/DqLoading';

/* istanbul ignore next */
DqLoading.install = function(Vue) {
  Vue.component(DqLoading.name, DqLoading);
};

export default DqLoading;
