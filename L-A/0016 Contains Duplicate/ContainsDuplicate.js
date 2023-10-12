// Approach 1: Brute Force 
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for(let i=0;i<nums.length;i++){
         for(let j=i+1;j<nums.length;j++){
             if(Math.abs(nums[i]-nums[j])<=t && (Math.abs(i-j)<=k)){
                 return true;
             }
         }
    }
     return false;
 };


//  Approach 2
let containsNearbyAlmostDuplicate = (A, K, T, m = {}, abs = Math.abs) => {
    let N = A.length;
    if (N < 2)
        return false;
    let bucket = x => T ? Math.floor(x / T) : Math.floor(x / (T + 1));  // ⭐️ +1 to avoid division by 0 when T == 0
    let ok = (i, j) => m[j] != undefined && abs(m[j] - A[i]) <= T;
    for (let i = 0; i < N; ++i) {
		// 1. check each j-th bucket for case 1 || case 2 || case 3
        let j = bucket(A[i]);
        if (ok(i, j - 1) || ok(i, j) || ok(i, j + 1))  // (👈 adjacent bucket to-the-left || 🎯 same bucket || adjacent bucket to-the-right 👉)
            return true;
        // 2. slide window 👉
        m[j] = A[i];                     // ✅ add current value A[i] onto the window by mapping A[i] to the j-th bucket
        if (0 <= i - K) {
            let end = bucket(A[i - K]);  // 🚫 remove end value A[i - K] from window by removing mapping A[i - K] to end-th bucket which "fell off the end" of window of size K
            delete m[end];
        }  
    }
    return false;
};