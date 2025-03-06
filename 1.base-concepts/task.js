// Задача №1
function solveEquation(a, b, c) {
  const d = b * b - 4 * a * c;    
  if (d < 0) return [];    
  if (d === 0) return [-b / (2 * a)];  
  const x1 = (-b + Math.sqrt(d)) / (2 * a);  
  const x2 = (-b - Math.sqrt(d)) / (2 * a);  
  return [x1, x2]; 
}


// Задача №2
function calculateTotalMortgage(percent, contribution, amount, months) {
  const i = percent / 100 / 12;  
  const loanBody = amount - contribution;  
  const monthlyPayment = loanBody * (i + i / (Math.pow(1 + i, months) - 1));  
  return +(monthlyPayment * months).toFixed(2);  
}
