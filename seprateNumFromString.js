const str = "340e901b-7172-4ee0-8f93-e9381757bb7b";

var str1 = str.split("");
// console.log(str1)
var sum=0
var str2 = str1.map(i =>{

    if (!isNaN(i)){
        console.log(i)
        // console.log(typeof(i))
        return sum = sum+ parseInt(i)
    }

})
console.log(sum)