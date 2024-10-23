function primeNumber() {
  const num = Number(prompt("Введіть число"));
let n=0;
for (let i = 2; i < num; i++) {
  if (n % i == 0) {
    n++;
    break;
  }
}
if (n == 0) (console.log (`Число ${num} є простим числом`))
else(console.log(`Число ${num} не є простим числом`))
}
primeNumber();