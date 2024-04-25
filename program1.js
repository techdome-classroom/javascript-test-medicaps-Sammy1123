function longestSubstring(s) {
    // Use a hash table to track the last seen index of each character.
    const used = {};
    // Keep track of the starting index of the current substring.
    let start = 0;
    // Initialize the maximum length seen so far.
    let max_length = 0;
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      // If the character is already in used and within the current window
      if (char in used && used[char] >= start) {
        // Shift the starting index to avoid duplicates
        start = used[char] + 1;
      } else {
        // Update the max_length
        max_length = Math.max(max_length, i - start + 1);
      }
      // Update the used dictionary
      used[char] = i;
    }
  
    return max_length;
  }

module.exports = { longestSubstring };
