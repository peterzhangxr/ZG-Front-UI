/**
 * Created by peterzhang on 2018/10/4.
 */
import {
    Cells, CellsTitle, Cell, CellHd, CellBd, CellFt
} from './components/cell'
import Switch from './components/switch'
import Input from './components/input'
import Select from './components/select'
import Button from './components/button'
import { Form, Item as FormItem, ItemFt as FormItemFt} from './components/form'
import Indicator from './components/indicator'
import Toast from './components/toast'
import Message from './components/message'
import ActionSheet from './components/actionsheet'
import Picture from './components/picture'
import { Panel, PanelHd, PanelBd, PanelFt } from './components/panel'
import {
    Box, BoxHd, BoxBd, BoxFt, BoxTitle, BoxSubTitle
} from './components/box'

import Avatar from './components/avatar'
import Tabbar from './components/tabbar'
import {Code as SmsCode } from './components/sms'
import Popup from './components/popup'
import Picker from './components/picker'

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
    Vue.component('zPicture', Picture)
    Vue.component('zPanel', Panel)
    Vue.component('zPanelHd', PanelHd)
    Vue.component('zPanelBd', PanelBd)
    Vue.component('zPanelFt', PanelFt)
    Vue.component('zBox', Box)
    Vue.component('zBoxHd', BoxHd)
    Vue.component('zBoxBd', BoxBd)
    Vue.component('zBoxFt', BoxFt)
    Vue.component('zBoxTitle', BoxTitle)
    Vue.component('zBoxSubTitle', BoxSubTitle)
    Vue.component('zAvatar', Avatar)
    Vue.component('zTabbar', Tabbar)
    Vue.component('zSmsCode', SmsCode)
    Vue.component('zPopup', Popup)

    Vue.$indicator = Vue.prototype.$indicator = Indicator;
    Vue.$toast = Vue.prototype.$toast = Toast
    Vue.$message = Vue.prototype.$message = Message
    Vue.$actionsheet = Vue.prototype.$actionsheet = ActionSheet
    Vue.$picker = Vue.prototype.$picker = Picker

}

export default {
    install,
    version
}
