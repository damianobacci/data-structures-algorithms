function arrayIntersection(arr1: number[], arr2: number[]): number[] {
    let mappedArray = new Map<number, boolean>();
    for (const num of arr1) {
        mappedArray.set(num, true);
    }
    let intersection: number[] = [];

    for (const num of arr2) {
        if (mappedArray.has(num)) {
            intersection.push(num);
        }
    }
    return intersection;
}