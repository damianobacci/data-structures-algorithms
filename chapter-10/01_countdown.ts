function countdown(n: number): void {
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
  console.log("Liftoff!");
}

function countdownRecursive(n: number): void {
    console.log(n);
  if (n === 0) {
    console.log("Liftoff!");
    return;
  }
  countdownRecursive(n - 1);
}