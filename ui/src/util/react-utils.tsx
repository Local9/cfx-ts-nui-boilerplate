import React, { useEffect, useState } from 'react'

// re-usable tailwind components
export function tailwind(classes: string) {
    const component: JSX.IntrinsicElements | React.ComponentType<any> = (props): JSX.Element => {
        return (
            <div className={classes} {...props}>
                {props.children}
            </div>
        )
    }

    return component
}

// hover hook
export function useHover(action: () => void, time = 500): { start: () => void; stop: () => void } {
    const [current, setState] = useState<NodeJS.Timeout>()

    return {
        start: () => {
            const id = setTimeout(() => {
                action()
                setState(undefined)
            }, time)

            setState(id)
        },
        stop: () => {
            if (current) {
                clearTimeout(current)
            }
        }
    }
}

// native event hook w/ cleanup
export function useNativeEvent<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions, condition = true): void {
    useEffect(() => {
        if (condition) window.addEventListener(type, listener)

        return () => {
            if (condition) window.removeEventListener(type, listener)
        }
    })
}
