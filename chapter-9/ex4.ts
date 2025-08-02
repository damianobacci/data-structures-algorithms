import { Stack } from "./01_stack";

function reverseString(str: string): string {
    const stack = new Stack<string>();
    for (const char of str) {
        stack.push(char);
    }
    let reversed = '';
    for (let i = 0; i < str.length; i++) {
        reversed += stack.pop()
    }
    return reversed;
}