var addTwoPromises = async function (promise1, promise2) {
    var _promise1 = await promise1;
    var _promise2 = await promise2;
    return _promise1 + _promise2;
};
