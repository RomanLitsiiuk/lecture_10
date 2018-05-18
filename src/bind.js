global.bind = function (insertFunction, context) {
  var bindArgs = [].slice.call(arguments, 2);
  return function () {
    var args = [].slice.call(arguments);
    var unshiftArgs = bindArgs.concat(args);
    return insertFunction.apply(context, unshiftArgs);
  };
};
