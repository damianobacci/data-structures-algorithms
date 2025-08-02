function findMissingLetter(str: string): string {
    let hashMap = new Map<string, boolean>()

    for (const char of str) {
        if (hashMap.has(char)) {
            continue
        }
        hashMap.set(char, true)
    }

    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz'
    for (const letter of alphabet) {
        if (!hashMap.has(letter)) {
            return letter
        }
    }
    return 'No missing letter found'
}