module.exports = {
        reduceLoop(testArray) {
            function calculateMath(arr) {
                return arr.reduce((sum, i) => sum + i, 0)
            }
            var start = new Date();
            var result = 0
            for (let i = 1; i< 99 ; i++){
                result +=calculateMath(testArray)
            }
            var end = new Date();
            console.log(`.reduce executed time: ${end - start} ms`);
    }
};