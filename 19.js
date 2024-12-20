var once = function (fn) {
    var _called = false;
    return function (...args) {
        if (!_called) {
            _called = true;
            return fn(...args);
        }
        return undefined;
    };
};
