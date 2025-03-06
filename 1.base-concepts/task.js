function solveEquation(a, b, c) {
  let arr = [];
  let D = b ** 2 - 4 * a * c;

  if (D < 0) {
    return arr;
  } else if (D === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } else {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr.push(x1, x2);
  }

  return arr;
}
