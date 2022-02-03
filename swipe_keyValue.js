let myObj1 = {'a':1,'b':2,'c':3};
function myObject(myObj1){
    // let myObj1 = {'a':1,'b':2,'c':3};
    let myNewObj = []
    let myNewObj1 = []
    for (x in myObj1){
        myNewObj.push(x)
        myNewObj1.push(myObj1[x])
    }
    console.log(myNewObj)
    console.log(myNewObj1)
    let i=0;
    let obj = {}
    let newKey;
    let newVal;
    for (i = 0; i<myNewObj.length; i++){
   
        newKey = myNewObj1[i];
        newVal = myNewObj[i];
        obj[newKey]=newVal
    }
    return (obj)
}
console.log(myObject(myObj1))