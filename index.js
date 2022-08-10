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
const returnfun = callfn(multiply);
const return3 = returnfun(3);
const res = return3(4);
console.log(res);
