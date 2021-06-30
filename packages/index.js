import CatDialog from './dialog'
import CatButton from './dialog-button'

const components = [CatDialog, CatButton]

const install = function(Vue) {
  if (install.installed) return
  components.map(cpn => Vue.component(cpn.name, cpn))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { install, CatDialog, CatButton }

export default {
  install,
  CatDialog,
  CatButton,
}
