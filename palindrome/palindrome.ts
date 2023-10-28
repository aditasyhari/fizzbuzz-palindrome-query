function isPalindromeTs(str: string): boolean {
    return str === str.split('').reverse().join('');
}

console.log(isPalindromeTs('hello'));