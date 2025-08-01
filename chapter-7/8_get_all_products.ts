function twoNumberProduct(array: number[]): number[] {
    let products: number[] = []
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            products.push(array[i] * array[j])
        }
    }
    return products
}