export interface IArrayLike<T> {
    push(element: T): void;
    pop(): T | undefined;
    read(): T | undefined;
}

export class Stack<T> implements IArrayLike<T> {
    private data: T[] = [];

    push(element: T): void {
        this.data.push(element);
    }

    pop(): T | undefined {
        return this.data.pop();
    }

    read(): T | undefined {
        return this.data[this.data.length - 1];
    }
}