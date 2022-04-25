var readlineSync = require('readline-sync')

var num = readlineSync.questionInt("Enter the num:-")

var i = 1;
var sum = 0;
while (i<= num){
    var num1 = readlineSync.questionInt("enter the num:-")
    sum = sum+num1
    i++
}
console.log(sum)