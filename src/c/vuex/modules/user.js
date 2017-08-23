import * as types from '../mutation-types'
import { store } from '@util'
const state = {
    username: '',
    token: '',
}

const mutations = {

    [types.GET_LOCAL_USER](state) {
        state.username = store('username')
        state.token = store('token')
    },
    [types.USER_LOGIN_SUCCESS](state, userInfo) {
        store('username', state.username = userInfo.username)
        store('token', state.token = userInfo.token)
    },

    [types.USER_LOGIN_FAILURE](state) {
        store('token', '')
    },

    [types.USER_LOGOUT](state) {
        store('token', '')
        window.location.reload()
    }
}


export default {
    state,
    mutations
}
