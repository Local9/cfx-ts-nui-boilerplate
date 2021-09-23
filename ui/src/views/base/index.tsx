import { usePulse } from '@pulsejs/react'
import { atom } from '../../logic/state'

export const state = {
    VISIBLE: atom(false)
}

export default function Base() {
    const [visible] = usePulse([state.VISIBLE])

    if (!visible) return null

    return <p>Base View</p>
}
