import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { cfx } from './logic/cfx'
import { logger } from './logic/logger'
import * as defaults from './logic/defaults'

// log environment
logger.debug(`Agent: ${navigator.userAgent}`)
logger.debug('* Development Version')

// render app
ReactDOM.render(<App />, document.getElementById('app'))

if (cfx.development()) {
    // fetch default state
    defaults.pull('state').then((state) => defaults.apply(state, global))

    // enable hot reloading
    module.hot?.accept()
}
