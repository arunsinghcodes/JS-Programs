// Calculate sum of first ‘n’ numbers.


const sumOfNumbers = (n) =>{
    let sum = 0;
    for(let i =0; i <= n; i++){
        sum = sum + i;
    }
    
    return sum;
}

console.log(sumOfNumbers(10));