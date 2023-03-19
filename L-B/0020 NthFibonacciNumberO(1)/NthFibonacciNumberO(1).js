const NthFibonacciNumber = (n) => {
  root_five = Math.sqrt(5);
  major_term = (1 + root_five) / 2;
  minor_term = (1 - root_five) / 2;

  return Math.round(
    (1 / root_five) * (Math.pow(major_term, n) - Math.pow(minor_term, n))
  );
};

module.exports = NthFibonacciNumber;
