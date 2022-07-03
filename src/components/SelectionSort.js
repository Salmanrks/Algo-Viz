function selectionSort(inputArr, steps) {
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
      steps.push([...inputArr]);
    }
  }
  return steps;
}

export default selectionSort;
