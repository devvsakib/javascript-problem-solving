const NthNumberFibonacci = n => {
	if (n <= 0) return 0
	if (n <= 1) return 1

	return NthNumberFibonacci(n - 2) + NthNumberFibonacci(n - 1)
}

module.exports = NthNumberFibonacci