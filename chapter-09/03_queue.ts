import { IArrayLike } from "./01_stack";

export class Queue<T> implements IArrayLike<T> {

    private data: T[] = []

    push(el: T) { // enqueue
        this.data.push(el)
    }

    pop() { // dequeue
        return this.data.shift()
    }

    read() {
        return this.data[0]
    }

}