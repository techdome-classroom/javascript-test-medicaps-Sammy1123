function smallestMissingPositiveInteger(nums) {
  let n = nums.length;

  // First pass: Adjust the array by placing each number in its correct position if possible
  for (let i = 0; i < n; i++) {
      while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
          // Swap nums[i] with nums[nums[i] - 1]
          let temp = nums[nums[i] - 1];
          nums[nums[i] - 1] = nums[i];
          nums[i] = temp;
      }
  }

  // Second pass: Find the first index where the number is not equal to index + 1
  for (let i = 0; i < n; i++) {
      if (nums[i] !== i + 1) {
          return i + 1;
      }
  }

  // If all numbers from 1 to n are present, the smallest missing positive is n + 1
  return n + 1;
}
module.exports = smallestMissingPositiveInteger;
