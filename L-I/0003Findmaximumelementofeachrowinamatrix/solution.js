
function maxelement(no_of_rows, arr)
{
	var i = 0;
	
	// Initialize max to 0 at beginning
	// of finding max element of each row
	var max = 0;
	var result = Array.from({length: no_of_rows}, (_, i) => 0);
	while (i < no_of_rows)
	{
		for (var j = 0; j < arr[i].length; j++)
		{
			if (arr[i][j] > max)
			{
				max = arr[i][j];
			}
		}
		result[i] = max;
		max = 0;
		i++;

	}
	printArray(result);

}

// Print array element
function printArray(result)
{
	for (var i = 0; i < result.length; i++)
	{
		document.write(result[i]+"<br>");
	}

}

// Driver code
	var arr = [[3, 4, 1, 8],
	[ 1, 4, 9, 11],
	[ 76, 34, 21, 1],
[ 2, 1, 4, 5] ];
	
// Calling the function
maxelement(4, arr);

