import React from 'react'
import { usePulse } from '@pulsejs/react'
import { cfx } from '../../logic/cfx'
import { atom, core } from '../../logic/state'
import * as defaults from '../../logic/defaults'

export const state = {
    VISIBLE: atom(false)
}

export default function Base() {
    const [visible] = usePulse([state.VISIBLE])

    if (!visible) return null

    return <p>Base View</p>
}

if (cfx.development()) {
    // fetch default state
    defaults.pull('base').then(state => defaults.apply(state, core._state['base']))
}
