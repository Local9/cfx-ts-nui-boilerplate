import * as Pulse from '@pulsejs/react'
import { logger } from './logger'

export const core = {
    _loaded: {},
    _state: {}
}

export function atom<T>(initialState: T = null): Pulse.State<T> {
    return Pulse.state<T>(initialState)
}

window.addEventListener('message', (event) => {
    const action = event.data.action

    if (action === 'state/Mutate') {
        const key = event.data.key
        const view = event.data.view
        const params = event.data.params
        const method = event.data.method
        let ref = core._state[view]

        for (const path of key.split('.')) {
            if (!ref) continue

            ref = ref[path]
        }

        if (method == 'collect' && ref) {
            ref['reset']()
        }

        if (ref) ref[method](...params)
        else logger.error(`Mutation (${method}): Key '${view}/${key}' is a invalid reference.`)
    }
})
