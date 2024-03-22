const myArr=[1,2,4,7]
let maxNum=myArr[0]
function max(myArr) {
    for (let i = 1; i < myArr.length; i++) {
        if (myArr[i] > maxNum) {
            maxNum = myArr[i]
        }
        
    }
    return max
    
}
 max(myArr)
console.log('max number is ', max);