let XOArray = ["x", "x", "o", "x", "x", "o", "x", "o","o"]
console.log(XOArray)


function getRows(array){
    let rows = [];
    for (let i = 0; i < array.length; i += 3) {
      let row = array.slice(i, i + 3);
      rows.push(row);
    }
    return rows;
}


function getHorizontal(sign){
    let rows = getRows(XOArray);
    console.log(rows)
    for (let i = 0; i < rows.length; i ++) {
        //let row = array.slice(i, i + 3);
        if(rows[i].every(element => element === sign)){
            return true
        } 

      }
     return false 
}

//console.log(getHorizontal("x"));
//console.log(getRows(XOArray));

function getVertical(sign){
    let rows = getRows(XOArray);
    console.log(rows)
    let column = []
    let collumns = []
    for (let i = 0; i < rows.length; i ++) {
        for (let j = 0; j < rows.length; j ++) {

            column[i] = rows[i][j];

    
      if(column.every(element => element === sign)){
        return true
    } 
        }
      }
     return false 
}

console.log(getVertical("o"));
/*


const allEqual = arr => arr.every(val => val === arr[0]);

//Check horizontals
function checkHorizontal(sign, array){
    for (let i = 0; i < array.length; i += 3) {
        
        let row = array.slice(i, i + 3);
        //console.log(row)
        if (row[0] == sign && allEqual(row)){
            return true
        } 
    }
    return false
}




//Check verticals

function checkVertical(sign, array){
    for (let i = 0; i < array.length; i += 3) {
        let rows = [];
    
        let row = array.slice(i, i + 3);
        rows[i] = row;
        console.log(rows)
        //if (row[0] == sign && allEqual(row)){
            //return true
        //} 
    }
    return false
    
}

console.log(checkVertical("x", XOArray))

//Check diagonals




//checkHorizontal("x", XOArray);
checkVertical("x", XOArray)

*/