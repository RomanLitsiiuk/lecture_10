global.measuredExecutionTime = function (fn) {
  var result;
  var fnTimer;
  return function() {
    console.time(fnTimer);

    result = fn.apply(this, arguments);

    console.timeEnd(fnTimer);
    console.log(result);
    return result;
  };
};
