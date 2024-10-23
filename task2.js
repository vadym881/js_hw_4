function validatePerfectNumber() {
    const numberInput = Number(prompt("Введіть число"));
    for (let num1 = 1; num1 <= numberInput; num1++) {
      let sum = 0;
      for (let num2 = 1; num2 < num1; num2++) {
        if (num1 % num2 === 0) {
          sum += num2;
        }
      }
      if (sum === num1) {
        console.log(`Число ${num1} є досконалим`);
      } else {
        console.log(`Число ${num1} не є досконалим`);
      }
    }
  }
  validatePerfectNumber();