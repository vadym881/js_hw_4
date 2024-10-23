function christmasTree() {
    const height = Number(prompt("Введіть висоту вершини ялинки"));
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