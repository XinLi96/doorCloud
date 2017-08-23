import Vue from 'vue';
import Element from 'element-ui';
import {Message} from 'element-ui';
Element.Dialog.props.modalAppendToBody.default=false
Vue.use(Element);
let ExtendUI = {};
ExtendUI.install = function(Vue, options) {
	Vue.errorMessage = Vue.prototype.$errorMessage = function(msg) {
		Message({
			message: msg,
			iconClass: 'el-icon-information',
			customClass: 'ce-custom-class-error'
		})
	}
}

Vue.use(ExtendUI);