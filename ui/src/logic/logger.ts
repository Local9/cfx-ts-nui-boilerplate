import { cfx } from './cfx'

export const logger = {
    debug: (...data: any[]) => {},
    info: console.log.bind(window.console),
    warn: console.warn.bind(window.console),
    error: console.error.bind(window.console)
}

if (cfx.development()) {
    logger.debug = console.log.bind(window.console)
}
