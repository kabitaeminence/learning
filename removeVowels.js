const array = ['a','b','c','d','e','i','j','k','m','n']


// var i = 0;

// while(i<array.length){
//     if (array[i]!='a' && array[i]!='e' && array[i]!='i' && array[i]!='o' & array[i]!='u'){
//         // console.log(array[i])
//         arr.push(array[i])
//     }
//     i++
// }
// console.log(arr)



// function removevowels(array){
//     let newArray = [];
//     for (let i = 0;i<array.length;i++){
//         if (array[i]!='a' && array[i] !='e' && array[i]!='i' && array[i]!='o' && array[i]!='u'){
//             // str +=array[i]
//             newArray.push(array[i])
//         }
//     }
//     return newArray
// }

// console.log(removevowels(array))


var myArray=array.filter((data) => !['a','e','i','o','u'].includes(data));

console.log(myArray)
