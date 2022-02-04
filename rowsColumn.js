// let column = ['name','roll','class']

// let rows = [['Raghveer','1','tl'],['Manvi','2','BihAR'],['Kabita','3','Mohali']]

// function createTable(column,rows){
//     let i,j;
// var str =""
// var str1 = ""
// var str2 = ""
// var str3 = ""
// for ( i=0; i<column.length; i++){
//     for (let k = 0; k<rows.length; k++){

//     }
//     str1= str1+ "      "+ rows[0][i] 
//     str2 = str2+ "      "+rows[1][i]  
//     str3 = str3+ "      "+ rows[2][i]
//     str= str+ "        "+column[i] 
// }

// console.log(str)
// console.log(str1)
// console.log(str2)
// console.log(str3)

// }
// createTable(column,rows)


let column = ['name','roll','class']

let rows = [['Raghveer','1','tl'],['Manvi','2','BihAR'],['Kabita','3','Mohali']]

function createTable(column,rows){
    let i,j;
var str =""
var str1 = ""
for ( i=0; i<column.length; i++){
    for (let k = 0; k<rows.length; k++){
        str1= str1+"       " +(rows[i][k])
    }
    str1+="\n"
    str= str+ "        "+column[i] 
}
console.log(str)
console.log(str1)
}
createTable(column,rows)


