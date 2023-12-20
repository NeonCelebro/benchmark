
module.exports = {
    forLoop (testArray){
        function calculateMath(arr) {
            let sum = 0;
            for (let i = 0; i< arr.length ; i++){
                sum += arr[i]
            }
            return sum;
        }
        var start = new Date();
        var result = 0
        for (let i = 1; i< 99 ; i++){
            result +=calculateMath(testArray)
        }

        var end = new Date();
        console.log(`for loop executed time: ${end - start} ms`);
    }
};