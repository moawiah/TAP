/**
 * Finds two distinct indices of elements that add up to the target sum.
 * @param {number[]} nums - The input array of integers.
 * @param {number} target - The target sum to achieve.
 * @returns {number[]} - An array of two indices.
 */
function twoSum(nums, target) {
    const numToIndex = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numToIndex.has(complement)) {
            const complementIndex = numToIndex.get(complement);
            return [complementIndex, i];
        }

        numToIndex.set(nums[i], i);
    }

    // No solution found, return an empty array or throw an error
    // depending on the problem's requirement.
    return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));     // Output: [1, 2]
console.log(twoSum([3, 3], 6));        // Output: [0, 1]
