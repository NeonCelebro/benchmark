module.exports = {
    forEachLoop(testArray) {
        function calculateMath(arr) {
            let sum = 0;
            arr.forEach((i) => sum += i)
            return sum;
        }
        var start = new Date();
        var result = 0
        for (let i = 1; i < 99; i++) {
            result += calculateMath(testArray)
        }
        var end = new Date();
        console.log(`.forEach executed time: ${end - start} ms`);
    }
}