function findFirstDuplicate(array: string[]): string {
    const hash = new Map<string, boolean>()

    for (const str of array) {
        if (hash.has(str)) {
            return str
        }
        hash.set(str, true)
    }
    return 'No duplicates found'
}