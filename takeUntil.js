const takeUntil = function (array, callback) {
    let results = [];
    for (const item of array) {
        if (callback(item)) {
            return results;
        } results.push(item)
    }
    return results;
}
