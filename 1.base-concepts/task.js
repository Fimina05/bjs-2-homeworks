// Задача №1
function solveEquation(a, b, c) {
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2];
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    return [x];
  } else {
    return [];
  }
}

// Задача №2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const loanAmount = amount - contribution;
  const monthlyRate = percent / 100 / 12;
  const denominator = Math.pow(1 + monthlyRate, countMonths) - 1;

  if (denominator === 0) {
    return loanAmount;
  }

  const monthlyPayment = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, countMonths) / denominator;
  const totalAmount = monthlyPayment * countMonths;

  return +totalAmount.toFixed(2);
}
