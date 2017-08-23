import { assign, find } from 'lodash'
import base from './env.base.conf'
import envConf from './env.conf'

export default find(envConf.map(v => assign({}, base, v)), v => v.webBaseURL == base.webBaseURL)
