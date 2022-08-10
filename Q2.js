function multiply(a, b) {
  return a * b;
}

function callfn(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

const func = callfn(multiply)
const func2 = func(2);
const func3 = func2(3)