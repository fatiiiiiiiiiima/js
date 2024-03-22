// const vowels=[]
// function findVowels(string) {
//     for (let i = 0; i < string.length; i++) {
//         // const element = string[i];
//         if (string[i] === 'a' || string[i] === 'e'|| string[i] ==='i' || string[i] === 'o' || string[i] === 'u') {
//             vowels.push(string[i])}
//      }
//      return vowels
            
//         }
//         console.log(findVowels('fatima'));
        
    
    
/////sum of digit calculate

function sumOfDigits(sum){
    for (let i = 0; i < sum.length; i++) {
       
        sum+=sum[i];
    }
    return sum

}
console.log(sumOfDigits(1,2,3));