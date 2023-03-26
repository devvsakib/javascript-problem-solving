const ValidParentheses = (s) => {
  var stack = [];

  obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i of s) {
    if (Object.keys(obj).includes(i)) {
      stack.push(i);
    } else if (stack && obj[stack[stack.length - 1]] == i) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0 ? true : false;
};

s = "()";
s1 = "()[]{}";
s2 = "(]";

console.log(ValidParentheses(s));
console.log(ValidParentheses(s1));
console.log(ValidParentheses(s2));
