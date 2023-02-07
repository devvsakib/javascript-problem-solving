const MemoizedNthNumberFibonacci = (n, memo = {}) => {
	if (n <= 0) return BigInt(0)
	if (n <= 1) return BigInt(1)

	if (memo[n]) {
		return memo[n]
	}

	const result =
		MemoizedNthNumberFibonacci(n - 2, memo) +
		MemoizedNthNumberFibonacci(n - 1, memo)

	memo[n] = result

	return result
}

module.exports = MemoizedNthNumberFibonacci
