// function display()
// {
//   var date=new Date();
// var day=date.getDate();
// var month=date.getMonth()+1;
// var year=date.getFullYear();
// console.log("<br>Date is: "+day+"/"+month+"/"+year);
// }
// display();

// ===================================================================

// function display()
// {
// var x=102;//integer value
// var y=102.7;//floating point value
// var z=13e4;//exponent value, output: 130000
// var n=new Number(16);//integer value by number object
// console.log(x+" "+y+" "+z+" "+n);
// }

// function display() {
//   var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   arr1.copyWithin(2);
//   console.log(arr1);
// }
// display();


// function display()  
// {  
// var set = new Set();    
// set.add("jQuery");    
// set.add("AngularJS");    
// set.add("Bootstrap");    
// for (let elements of set) {    
//  console.log(elements+"<br>");    
// }     
// }  
// display(); 

// function display()  
// {  
// var ws = new WeakSet();    
// var obj1={};    
// var obj2={};    
// ws.add(obj1);    
// ws.add(obj2);    
// //Let's check whether the WeakSet object contains the added object  
// console.log(ws.has(obj1));    
// console.log(ws.has(obj2));     
// }     
// display()  

// function display()  
// {  
// x = 10;    
// y = 15;    
// z = x + y;    
// debugger;    
// console.log(z);    
// // console.log();     
// }     
// display();  


// var num=-5;  
// function display()  
// {  
//   console.log(num/0);  
// }  
// display();



const array = [1,12,23,4,5,6];

// array.map((element,index)=>{
//     console.log(element , index)
// })


array.filter((element,index) =>{
    if (element%2==0){
        console.log(element)
    }
})

// array.find((element)=>{
//     if (element>4){
//         console.log(element)
//     }
// })


// array.fill("manvi",1,4)
// // fruits.fill("Kiwi", 2, 4);


// console.log(array)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = Object.keys(fruits);
// console.log(keys)

// let text = "";
// for (let x of keys) {
//   text += x + "";
// }

// console.log(text)