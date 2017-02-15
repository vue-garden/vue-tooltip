import Tooltip from './Tooltip'

const install = (Vue) => {
  Vue.component(Tooltip.name, Tooltip)
}

export default {
  version: '0.0.1',
  install
}
