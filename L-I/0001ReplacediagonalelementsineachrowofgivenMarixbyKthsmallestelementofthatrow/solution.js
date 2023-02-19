	// JavaScript code for the above approach
	let N = 4;

	// Function to print Matrix
	function showMatrix(mat) {
		let i, j;
		for (i = 0; i < N; i++) {
			for (j = 0; j < N; j++) {
				document.write(mat[i][j] + " ");
			}
			document.write('<br>')
		}
	}

	// Function to return k'th smallest element
	// in a given array
	function kthSmallest(arr, n, K)
	{
		
		// Sort the given array
		arr.sort(function (a, b) { return a - b })

		// Return k'th element
		// in the sorted array
		return arr[K - 1];
	}

	// Function to replace diagonal elements
	// with Kth min element of row.
	function ReplaceDiagonal(mat, K)
	{
		let i, j;
		let arr = new Array(N);

		for (i = 0; i < N; i++) {
			for (j = 0; j < N; j++)
				arr[j] = mat[i][j];
			mat[i][i] = kthSmallest(arr, N, K);
		}
		showMatrix(mat);
	}

	// Utility Main function.
	let mat = [[1, 2, 3, 4],
	[4, 2, 7, 6],
	[3, 5, 1, 9],
	[2, 4, 6, 8]];

	let K = 3;
	ReplaceDiagonal(mat, K);

