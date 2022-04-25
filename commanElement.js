function getComman(){
    let arr1 = ['a','b','c','d','m']; 
    let arr2 = ['b','x','c','a','m'];
    let newArry = []
    let i,j;
    for (i = 0; i<arr1.length; i++){
        for (j = 0; j<arr2.length; j++){
            if (arr1[i]==arr2[j]){
                newArry.push(arr1[i])
            }
        }
    }
    return newArry
}
console.log(getComman())