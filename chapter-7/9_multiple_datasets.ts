function twoNumberProductArr(array1: number[], array2: number[]): number[] {
    let products: number[] = []
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            products.push(array1[i] * array2[j])
        }
    }
    return products
}