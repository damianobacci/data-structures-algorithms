function isPalindrome(string: string): boolean {
    let leftIndex: number = 0
    let rightIndex: number = string.length - 1

    while (leftIndex < string.length / 2) {
        if (string[leftIndex] !== string[rightIndex]) return false
        leftIndex++
        rightIndex--
    }
    return true
}