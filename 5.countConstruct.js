/**
 * Write a function countConstruct(target , wordBank) that accepts a target string and an array of strings
 * 
 */

const countConstruct = (target, wordBank, memo = {}) => {

    if (target in memo) return memo[target];
    if (target === '') return 1;

    let totalCount = 0;

    for (let word of wordBank) {

        if (target.indexOf(word) === 0) {
            const sufix = target.slice(word.length)
            const numbersOfWays = countConstruct(sufix, wordBank, memo)
            totalCount += numbersOfWays
        }

    }

    memo[target] = totalCount
    return totalCount;

}

/*
m =target.length
n=wordBank.length

Brute force
time O(n^m*m)
space O(m*m)



Memozied
time O(n*m*m)
space O(m*m)

*/

console.log(countConstruct("arun", ['a', 'ar', 'u', 'n', 'un']));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    'e',
    'ee',
    'eee',
    'eeeee',
    'eeeeee',
    'eeeeeeee',
    'eeeeeeeeee',
    'eeeeeeeeeeeeeeee'
]));
