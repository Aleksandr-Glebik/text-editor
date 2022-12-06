
export const getTagFromString = (value: string): string => {
    return value.split(' ').map( el => {
        if (el.startsWith('#')) {
            return el
        }
        return ''
    }).join('')
}

