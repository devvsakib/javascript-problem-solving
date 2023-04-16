# 0007 The Skyline Problem ( L-A )

## Problem

A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively.

The geometric information of each building is given in the array `buildings` where `buildings[i] = [lefti, righti, heighti]`:

- `lefti` is the x coordinate of the left edge of the ith building.
- `righti` is the x coordinate of the right edge of the ith building.
- `heighti` is the height of the ith building.

You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

## Example 1

```
Input: buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
Explanation:
Figure A shows the buildings of the input.
Figure B shows the skyline formed by those buildings. The red points in figure B represent the key points in the output list.
```

## Solution Pseudocode

```javascript
Function getSkyline(buildings):
    // base case
    if (length(buildings) == 1):
        return [(buildings[0].left, buildings[0].height), (buildings[0].right, 0)]

    // divide the buildings into two groups
    mid = length(buildings) // 2
    left = getSkyline(buildings[:mid])
    right = getSkyline(buildings[mid:])

    // merge the two groups
    return merge(left, right)

Function merge(left, right):
    // initialize the pointers and the result array
    i, j = 0, 0
    result = []
    left_height, right_height = 0, 0
    // merge the two lists
    while (i < len(left) and j < len(right)):
        if (left[i][0] < right[j][0]):
            x = left[i][0]
            left_height = left[i][1]
            height = max(left_height, right_height)
            result.append((x, height))
            i += 1
        else:
            x = right[j][0]
            right_height = right[j][1]
            height = max(left_height, right_height)
            result.append((x, height))
            j += 1
    // append the remaining points from left or right
    while (i < len(left)):
        result.append(left[i])
        i += 1
    while (j < len(right)):
        result.append(right[j])
        j += 1

    return result

```

## How it works
- The `getSkyline` function is the main function that takes in a list of buildings as input and returns the skyline as a list of points. The function first checks if there is only one building in the list, in which case it returns two points representing the left and right boundaries of the building.
- If there are more than one building in the list, the function recursively divides the buildings into two groups using the midpoint, and calls itself on each group. The results from the two recursive calls are then merged using the `merge` function.
- The `merge` function takes in two lists of points representing the skylines of the left and right groups and merges them into a single list. The function initializes two pointers, `i` and `j`, to 0 and sets `left_height` and `right_height` to 0. The `result` array is used to store the merged skyline.
- The function then uses a while loop to iterate over the two input lists. At each iteration, it compares the x-coordinates of the points at the current positions of the two pointers. If the x-coordinate of the point in the left list is less than the x-coordinate of the point in the right list, it means that the left building is closer to the viewer, so the function uses the left building's height to update the `left_height` variable and calculates the maximum height between `left_height` and `right_height`. The function then appends a new point with the x-coordinate and maximum height to the `result` array, and increments the `i` pointer.
- If the x-coordinate of the point in the right list is less than or equal to the x-coordinate of the point in the left list, it means that the right building is closer to the viewer, so the function uses the right building's height to update the `right_height` variable

## References

- [LeetCode](https://leetcode.com/problems/the-skyline-problem/)

## Problem Added By

- [Haris](https://github.com/harisdev-netizen)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
