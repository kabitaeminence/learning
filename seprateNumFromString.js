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


// var str="ka12"
// i=0
// while (i<str.length){
//     var a=Number(str[i])
//     if (Number(a[i]==Number())){
//         console.log(typeof(a[i]))
//     }
//     else{
//         console.log(typeof(str[i]))
//     }
//     i++
// }