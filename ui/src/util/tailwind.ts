export const styles = (condition: boolean, ...classes: string[]) => {
    return condition ? ` ${classes.join(' ')}` : ''
}