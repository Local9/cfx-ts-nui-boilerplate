import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { cfx } from './logic/cfx'

// render app
ReactDOM.render(<App />, global.document.getElementById('app'))

if (cfx.development()) {
    // enable hot reloading
    module['hot']?.accept()
}
