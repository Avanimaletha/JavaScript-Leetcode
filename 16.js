var map = function (arr, fn) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i], i));
    }
    return newArray;
};
