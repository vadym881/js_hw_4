//Task1
function pairNumber(num) {
  num = Number(prompt("Введіть число"));
  if (num % 2 === 0) {
    console.log(`Число ${num} є простим числом`);
  } else {
    console.log(`Число ${num} не є простим числом`);
  }
}
pairNumber();

//Task2
function findPerfectNumber(numberInput) {
  numberInput = Number(prompt("Введіть число"));
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
findPerfectNumber();

//Task3
function christmasTree(height) {
  height = Number(prompt("Введіть висоту вершини ялинки"));
  for (let currentLevel = 1; currentLevel <= height; currentLevel++) {
    let spaces = "";
    let stars = "";
    for (let spaceCount = 0; spaceCount <= height - currentLevel; spaceCount++) {
      spaces += " ";
    }
    for (let starCount = 0; starCount < 2 * currentLevel - 1; starCount++) {
      stars += "*";
    }
    console.log(spaces + stars)
  }
  }
christmasTree();