const QuadEqnSolver = (a, b, c) => {
  // calculate the discriminant
  d = b * b - 4 * a * c;

  // find the two solutions for x
  x1 = (-b + Math.sqrt(d)) / (2 * a);
  x2 = (-b - Math.sqrt(d)) / (2 * a);

  // return the solution
  solution = { x1, x2 };
  return solution;
};

console.log("🚀 ~ :", QuadEqnSolver(1, 8, 15));
console.log("🚀 ~ :", QuadEqnSolver(1, 4, 4));
console.log("🚀 ~ :", QuadEqnSolver(1, -7, 10));
