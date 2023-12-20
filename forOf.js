module.exports = {
    forOf (testArray){
        function calculateMath(arr) {
            let sum = 0;
            for (let i of arr){
                sum += i
            }
            return sum;
        }

        var start = new Date();
        var result = 0
        for (let i = 1; i< 99 ; i++){
            result +=calculateMath(testArray)
        }
        var end = new Date();
        console.log(`forOf loop executed time: ${end - start} ms`);
    }
}