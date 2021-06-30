import CatDialog from './src/dialog'

CatDialog.install = function(Vue) {
  Vue.component(CatDialog.name, CatDialog)
}

export default CatDialog
