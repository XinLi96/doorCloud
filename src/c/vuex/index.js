import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as state from './state'
import * as mutations from './mutations'
import modules from './modules'
import config from '../config'


Vue.use(Vuex)

const options = {
    state,
    mutations,
    modules,
    strict: config.debug,
    plugins: config.debug ? [createLogger()] : []
}

export default new Vuex.Store(options)
