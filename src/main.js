import './style/master.css';
import Vue from 'vue';
import VModal from "vue-js-modal";
import VTooltip from 'v-tooltip'
import './something.js';

Vue.use(VTooltip)
Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false } });

export default Vue;
