// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();

// console.log(fruits)

// -------------------------------------push

// fruits.push("coconut")
// console.log(fruits)


// -------------------------------------shift

// fruits.shift();
// console.log(fruits)


// ----------------------------- unshift


// fruits.unshift("pineApple");
// console.log(fruits)

// ------------------------------concat



// var arr1 = [1,2,3,4,5]

// var myArray = arr1.concat(fruits)

// console.log(myArray)


// ---------------------- multiple concat

// var arr1 = [1,2,3,4,5]

// var name = ["manvi","kavita","isha"]

// var myArray = arr1.concat(fruits,name)

// console.log(myArray)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// ------------------------------splice
// frist argument where we have to add element second 
// argument how many element we will remove third argument what 
// we will add


// fruits.splice(2,0,"Lemon", "Kiwi");
// console.log(fruits)

// ----------------------------slice method  can remove element not 
// in fixed arry we have to tak another varabile
// The slice() method can take two arguments like slice(1, 3).

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(3);
// console.log(citrus)


// ---------------------------sort

// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// // const fruits =[12,8,3,1,7]
// fruits.sort()
// console.log(fruits)

// ----------------------------------------reverse

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.sort();
// fruits.reverse();

// console.log(fruits)

// ---------------------------Spread Operator


// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];
// const name = "manvi"
// const addarray = [...num1, ...num2,...name];

// console.log(addarray)



// const numbers = [1, 2, 3, 4, 5, 6];

// const [one, two,...rest] = numbers;

// console.log(numbers)


// var arr =[1,2,4,7,3,2,9];
// function even(arr) {
//     var i = 0;
//     while (i<arr.length){
//         if (arr[i]%2==0){
//             console.log(arr[i])
//         }
//         i++
//     }
    
//   }
// even(arr)

// --------------rest parameters

// var arr = [1,2,3,4]

// function arr1(a,b){
//     console.log(a,b)
// }
// arr1(...arr)


// const vehicles = ['mustang', 'f-150', 'expedition'];

// const [car, truck, suv] = vehicles;

// console.log(vehicles )


// -----------------------------destructuring of array

// const name = ["manvi", " kavita","isha"];

// var  [a,,c] = name

// console.log(a,c);



// const vehicles = ['mustang', 'f-150', 'expedition'];

// const [car,, suv] = vehicles;

// console.log(car,suv)



// const obj = {name:"manvi", roll:1, place:"mohali"}

// const {name,roll,place}= obj

// console.log(name, roll,place)


// console.log(roll)
// console.log(place)

// --------------------------------find?


// var array = [1, 10, 3, 40, 50,2,1];
// var found = array.find(function (element) {
//     return element > 2;
// });

// console.log(found)



// ------------------------remove space from string 

// const str = ' my name is Manvi';
// // const str1 = str.split(/\s/).join('');
// const str1 = str.split(' ')


// console.log(str1.join(''))


// const obj = [{name:"manvi",roll:1},{name:"isha",roll:"2"}]

// const obj1 = obj.map((i)=>{
//     return `name ${obj[i].name}. roll ${obj[i].roll}`
// })

// console.log(obj1)