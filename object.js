// const obj = [{name:"manvi",roll:1},{name:"isha",roll:"2"}]

// const obj1 = obj.map((i)=>{
//     // return user.name
//     return `name ${obj[i].name}. roll ${obj[i].roll}`
// })
// console.log(obj1)


// var arr = [1,2,3,4,5,6]

// var str = arr.fill("manvi",0,2)
// console.log(str)


// var arr1 = [12,10,11,13,14,17]

// // var arr2 = arr1.filter(arr2 =>arr2>12)
// var arr2 = (a,b)=>a+b
// var arr3 = arr1.reduce(arr2)

// console.log(arr3)


// const arr = [12,13,45,34,23]

// const arr1 = arr.filter(arr => arr%2==0)
// console.log(arr1)



// const obj = [{name:"Manvi",from:"Bihar"} ,{class:12, roll:1}]
// const obj1 = obj.map((j ,i)=>{
//     return (obj[i].name);
// })


// console.log(obj1)

// ------------------------inside the object create function and get value

// const obj1 = {name: "manvi",place:"Mohali",getName(){
//      return this.name
// }}
// console.log(obj1.getName())


// console.log(obj1.place)

// const obj1 = {name: "manvi",place:"Mohali",getName:()=>{
//     return this.name
// }}
// console.log(obj1.getName())
// ----------------------------------------------------------remove vowels from array

const array = ['a','b','c','d','e','i','j','k','m']

const arr = []

// for (let i = 0; i<array.length;i++){
//     if (array.includes()){
//         arr.push(array[i])
//     }
// }
// console.log(arr)

// const arr1 = array.filter((data) => !


var myArray=array.filter((data) => !['a','e','i','o','u'].includes(data));

console.log(myArray)

// const arr1 = array.filter(array,i =>{

//     if (array.includes("a","e",'i','o','u')){

//     }
//     else{
//         console.log(array[i])
//     }
// })


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