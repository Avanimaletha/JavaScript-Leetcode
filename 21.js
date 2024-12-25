var addTwoNumbers = function (l1, l2) {
    var _sum1 = "";
    var _sum2 = "";
    var _result = 0;
    if (Array.isArray(l1) && Array.isArray(l2)) {
        _sum1 = l1.join("");
        _sum2 = l2.join("");
        _result = Number(_sum1) + Number(_sum2);
        String(_result);
        // _result.split("");
    }
    return _result;
};
