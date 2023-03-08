const repeatStringNumTimes = (str, num) => {
  if (num < 1) {
    return "";
  }
  // here I used recursion technique to solve the problem
  return str + repeatStringNumTimes(str, num - 1);
};

// console.log(repeatStringNumTimes("AaA ", 3));

module.exports = repeatStringNumTimes;
