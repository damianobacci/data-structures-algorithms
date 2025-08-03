function selectionSort(array: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
        let lowestNumberIndex: number = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowestNumberIndex]) {
                lowestNumberIndex = j
            }
        }
        if (lowestNumberIndex != i) {
            let temp: number = array[i]
            array[i] = array[lowestNumberIndex]
            array[lowestNumberIndex] = temp
        }
    }
    return array
}