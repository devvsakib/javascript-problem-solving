Question - Replace diagonal elements in each row of given Matrix by Kth smallest element of that row

---------------------------------------------------------------------------------------------------------------

Approach: The solution is based on the concept of sorting. Follow the steps mentioned below:

    Traverse the matrix row-wise.
    Copy this row in another list.
    Sort the list and get the Kth smallest element and replace the diagonal element with that.

Below is the implementation of the above approach.

----------------------------------------------------------------------------------------------------------------
Given a matrix mat[ ][ ] of size N*N and an integer K, containing integer values, the task is to replace diagonal elements by the Kth smallest element of row.

Examples: 

    Input: mat[][]= {{1, 2, 3, 4}
                             {4, 2, 7, 6}
                             {3, 5, 1, 9}
                             {2, 4, 6, 8}}
    K = 2
    Output: 2, 2, 3, 4
                 4, 4, 7, 6
                 3, 5, 3, 8
                 2, 4, 6, 4
    Explanation: 2nd smallest element of 1st row = 2
    2nd smallest element of 2nd row is 4
    2nd smallest element of 3rd row is 3
    2nd smallest element of 4th row is 4             

    Input: mat[][] = {{1, 2, 3}
                              {7, 9, 8}
                              {2, 3, 6}}
    K = 2
    Output: 2, 2, 3
                 7, 8, 8
                 2, 3, 3