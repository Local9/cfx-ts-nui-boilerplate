import { logger } from './logger'
import { core } from './state'

export const pull = async (name: string): Promise<any> => {
    const content = await fetch(`dev/${name}.defaults.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then((self) => self.text())
        .then((self) => JSON.parse(self))

    return content
}

export const apply = (value: any, state: any) => {
    if (!state) return

    for (const key of Object.keys(value)) {
        const data = value[key]
        const ref = state[key]

        if (key.startsWith(':')) {
            apply(data, core._state[key.substr(1)])

            continue
        }

        if (!ref) {
            logger.warn(`(Default State) Could not find key: ${key}`)
        }

        if (ref && typeof ref.set === 'function') {
            ref.set(data)
        } else {
            apply(data, ref)
        }
    }
}
