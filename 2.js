var expect = function (val) {
    return {
        toBe: (otherVal) => {
            if (val !== otherVal) {
                throw new Error("Not Equal");
            } else {
                return true;
            }
        },
        notToBe: (otherVal) => {
            if (val === otherVal) {
                throw new Error("Equal");
            } else {
                return true;
            }
        },
    };
};
