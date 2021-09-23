import React, { lazy, Suspense } from 'react'
import { cfx } from './cfx'
import { core } from './state'

export async function useView(path: string) {
    const module = await import(`../views/${path}`)

    if (module.state && !core._loaded[path]) {
        const index = path.indexOf('/')
        const view = path.substring(0, index !== -1 ? index : undefined)
        const existing = core._state[view]

        core._loaded[path] = true
        core._state[view] = { ...(existing ?? []), ...module.state }

        if (cfx.development()) {
            function StateEntry(name: string, value: any) {
                this.name = name
                this.value = value
                this.type = typeof value
            }

            console.groupCollapsed(`State: ${view}`)
            console.table(Object.entries(module.state).map((self: [string, any]) => new StateEntry(self[0], self[1].value)))
            console.groupEnd()
        }
    }

    return module
}

export async function loadViews(...views: string[]) {
    const modules = []

    for (const view of views) {
        modules.push(await useView(view))
    }

    return modules
}

export function useLazyViews(...views: string[]) {
    const modules = []

    for (const view of views) {
        modules.push(lazy(async () => await useView(view)))
    }

    return views.map((self, index) => {
        const Module = modules[index]

        return (
            <React.Fragment key={index}>
                <Suspense fallback={`Loading: ${self}...`}>
                    <Module />
                </Suspense>
                <br />
            </React.Fragment>
        )
    })
}
