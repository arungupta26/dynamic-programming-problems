const allConstruct = (target, wordBank ,memo={}) => {

    if(target in memo) return memo[target]
    if(target === '') return [[]]

    let results = []

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix , wordBank , memo)
            const targetWays = suffixWays.map(way => [ word , ...way])
            results.push( ...targetWays );
        }
    }

    memo[target] = results
    return results
}

console.log(allConstruct("arun", ['a', 'ar', 'u', 'n', 'un']));
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    'r',
    'ee',
    'eee',
    'eeeee',
    'eeeeee',
    'eeeeeeee',
    'eeeeeeeeee',
    'eeeeeeeeeeee',
    'eeeeeeeeeeeeeeee'
]));

console.log(allConstruct("abcdef", ["ab","abc", "cd","def","abcd","ef","c"]));