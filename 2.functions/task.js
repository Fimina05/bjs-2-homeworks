function getArrayParams(...arr) {
  if (arr.length === 0) return { min: 0, max: 0, avg: 0 };
  
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  let avg = (sum / arr.length).toFixed(2);
  return { min, max, avg: +avg }; // Преобразуем обратно в число
}

function summElementsWorker(...arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  let evenSum = 0, oddSum = 0;
  arr.forEach(num => {
    if (num % 2 === 0) evenSum += num;
    else oddSum += num;
  });
  return evenSum - oddSum;
}

function averageEvenElementsWorker(...arr) {
  let evenElements = arr.filter(num => num % 2 === 0);
  if (evenElements.length === 0) return 0;
  return evenElements.reduce((sum, num) => sum + num, 0) / evenElements.length;
}

function makeWork(arrOfArr, func) {
  let results = arrOfArr.map(arr => func(...arr));
  return Math.max(...results);
}

