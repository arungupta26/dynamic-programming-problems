const canConstruct = (target, wordBank, memo={}) => {

    if (target in memo) return memo[target];
    if (target === '') return true;

    for (let word of wordBank) {

        if (target.indexOf(word) === 0) {
            const sufix = target.slice(word.length)
            if (canConstruct(sufix, wordBank,memo) === true) {
                memo[target]= true
                return true;
            }
        }

    }

    memo[target] = false;
    return false;

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


console.log(canConstruct("arun", ['a', 'ar', 'u', 'n', 'un']));
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    'e',
    'ee',
    'eee',
    'eeeee',
    'eeeeee',
    'eeeeeeee',
    'eeeeeeeeee',
    'eeeeeeeeeeeeeeee'
]));
