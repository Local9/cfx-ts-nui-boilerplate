export default {
    set(state: string, value: any) {
        mutate(state, value, 'set')
    },

	toggle(state: string) {
        mutate(state, null, 'toggle')
    }
}

export function mutate(key: string, value: any, method: string, ...params: any[]) {
    const separatorIndex = key.indexOf('/')
    const view = separatorIndex !== -1 ? key.substring(0, separatorIndex).toLowerCase() : 'base'

    if (separatorIndex !== -1) {
        key = key.substr(separatorIndex + 1)
    }

    SendNuiMessage(JSON.stringify({ action: 'state/Mutate', view, key, method, params: [value, ...params] }))

    // console.log(`Mutation: ${view}/${key} (${method}) ${value && `-> ${value}`}`)
}