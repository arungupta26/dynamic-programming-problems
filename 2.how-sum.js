const howSum = (targetSum , numbers , memo ={})=>{
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0 ) return [];
    if(targetSum < 0) return null;

    for (let number of numbers){

        const remainder = targetSum - number;
        const remainderResult = howSum(remainder , numbers , memo)
        if(remainderResult !== null){
            memo[targetSum] = [ ...remainderResult , number];
            return memo[targetSum]
        }
    }

    memo[targetSum] = null
    return null;
};

// m = targetSum
// n = numbers.length
// 
// Brute Force
// time: O(n^m * m)
// space: O(m)


//Memoized
//time : O(n*m*m)
//space : O(m*m)


console.log(howSum(7,[2,3,4]));
console.log(howSum(7,[5,3,4]));
console.log(howSum(300,[7,14]))
console.log(howSum(100,[10]))
