function hasDuplicateValueQuadratic(array: number[]): boolean { // this function has efficiency O(N^2), because we perform an outer loop and for each element we perform an inner loop
        let steps: number = 0
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j< array.length; j++) {
                steps++
                if (j !== j && array[i] === array[j]) {
                    return true
                }
            }
        }
        console.log(steps)
        return false
}

function hasDuplicateValueLinear(array: number[]): boolean { // This function has efficiency O(N), because we are only running comparisons through one loop
    let existingNumbers: (number | undefined)[] = [] // will be something like [undefined, 1, undefined, undefined, 1], where "1" marks the place if the number in that index has been seen
    for (let i = 0; i < array.length; i++) {
        if (existingNumbers[array[i]] === 1) {
            return true
        } else {
            existingNumbers[array[i]] = 1
        }
    }
    return false
}

function hasDuplicateValueSet(array: number[]): boolean { // In this case, you could also use a Set to check if a numbers has a duplicate
    const seen = new Set<number>();
    for (const num of array) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}