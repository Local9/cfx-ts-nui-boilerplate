console.log('loaded client')

RegisterCommand(
    'nui',
    () => {
        SendNuiMessage(JSON.stringify({ action: 'state/Mutate', key: 'VISIBLE', view: 'base', method: 'toggle', params: [] }))
    },
    false
)
