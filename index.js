const { forLoop } = require('./for');
const {forOf} = require("./forOf");
const {forEachLoop} = require("./forEach");
const {reduceLoop} = require("./reduce");

const testArray =  new Array(999999).fill(999);

    forLoop(testArray);
    forOf(testArray);
    forEachLoop(testArray);
    reduceLoop(testArray);
