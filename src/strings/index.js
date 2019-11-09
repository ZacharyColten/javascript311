const split = (str, delim) => {
  var arr = str.split(delim);
  return arr
}

const pairs = (str) => {
  var arr = []
  for (i = 0; i < str.length; i = i + 2) {
    arr.push(str[i] + str[i + 1])
  }
  return arr
}

const reverse = (str) => {
  var arr = str.split("")
  arr.reverse()
  var newString = arr.join("")
  return newString
}

module.exports = {
  split,
  pairs,
  reverse
}