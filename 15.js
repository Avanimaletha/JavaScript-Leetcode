var cancellable = function (fn, args, t) {
    fn(...args);
    const timerID = setInterval(() => {
        fn(...args);
    }, t);
    return function () {
        clearInterval(timerID);
    };
};
