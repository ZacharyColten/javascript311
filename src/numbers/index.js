const isEven = (num) => {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const sum = (arr) => {
  function myFunc(total, num) {
    return total + num;
  }
  return arr.reduce(myFunc)
}

const comboSum = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let n = 0; n < arr.length; n++) {
      if (arr[i] + arr[n] == sum && i != n) {
        return true
      }
    }
  } return false
}

module.exports = {
  isEven,
  sum,
  comboSum
}