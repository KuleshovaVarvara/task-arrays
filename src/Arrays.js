export function arraySorting(data) {
    let strArray = data.split(',');
    let numArray = [];

    for (let i = 0; i < strArray.length; i++) {
        numArray.push(Number(strArray[i]));
    }

    numArray.sort(function (a, b) {
        return a - b;
    });

    return numArray.join(',');
}

export function arrayFiltering(data) {
    let result = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i] <= 100) {
            result.push(data[i]);
        }
    }

    return result;
}

export function arrayPushing(array1, array2) {
    let result = [];

    for (let i = 0; i < 5; i++) {
        result.push(array1[i]);
        result.push(array2[i]);
    }

    return result;
}
