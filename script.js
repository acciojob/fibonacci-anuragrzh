function fibonacci(num) {
// your code here
	if (num === 0) return 0; // First Fibonacci number
    if (num === 1) return 0; // Second Fibonacci number
    if (num === 2) return 1; // Third Fibonacci number
	 let a = 0, b = 1;
    for (let i = 2; i <num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return num === 0 ? a : b;
}


module.exports = fibonacci;
