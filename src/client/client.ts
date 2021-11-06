import pulse from './nui/pulse'

console.log('loaded client')

RegisterCommand(
    'nui',
    () => {
        pulse.toggle('VISIBLE')
    },
    false
)
