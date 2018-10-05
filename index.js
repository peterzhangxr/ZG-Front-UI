/**
 * Created by peterzhang on 2018/10/4.
 */
import { Cells, CellsTitle, Cell, CellHd, CellBd, CellFt } from './components/cell'
import Switch from './components/switch'
import Input from './components/input'
import Select from './components/select'
import Button from './components/button'
import { Form, Item as FormItem, ItemFt as FormItemFt} from './components/form'
import Indicator from './components/indicator'

const version = '0.0.1'
const install = (Vue, config = {})=> {
    if (install.installed) {
        return
    }

    Vue.component('zCellContainer', Cells)
    Vue.component('zCellTitle', CellsTitle)
    Vue.component('zCell', Cell)
    Vue.component('zCellHd', CellHd)
    Vue.component('zCellBd', CellBd)
    Vue.component('zCellFt', CellFt)
    Vue.component('zSwitch', Switch)
    Vue.component('zInput', Input)
    Vue.component('zForm', Form)
    Vue.component('zFormItem', FormItem)
    Vue.component('zFormItemFt', FormItemFt)
    Vue.component('zSelect', Select)
    Vue.component('zButton', Button)

    Vue.$indicator = Vue.prototype.$indicator = Indicator;

}

export default {
    install,
    version
}
