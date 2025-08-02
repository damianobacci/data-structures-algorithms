function returnFirstNonDuplicated(str: string): string {
    const hashMap = new Map<string, boolean>()

    for (const char of str) {
        if (hashMap.has(char)) {
            hashMap.set(char, false)
        } else {
            hashMap.set(char, true)
        }
    }

    for (const [char, isUnique] of hashMap) {
        if (isUnique) {
            return char;
        }
    }
    return 'No non-duplicated character found'
}