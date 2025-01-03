Array.prototype.groupBy = function (fn) {
    return this.reduce((result, item) => {
        const groupKey = fn(item);
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(item);
        return result;
    }, {});
};
