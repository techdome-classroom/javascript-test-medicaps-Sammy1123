function longestSubstring(s) {
    // Implementation of longestSubstring function
        let map = {};
        let maxLength = 0;
        let start = 0;
    
        for (let end = 0; end < s.length; end++) {
            const currentChar = s[end];
    
            // If the character is already in the map and the index is within the current window
            if (map[currentChar] !== undefined && map[currentChar] >= start) {
                // Move the start to the right of the last occurrence of currentChar
                start = map[currentChar] + 1;
            }
    
            // Update or add the current character's position
            map[currentChar] = end;
    
            // Calculate the length of the current substring
            maxLength = Math.max(maxLength, end - start + 1);
        }
    
        return maxLength;
    }
        console.log(longestSubstring("abcabcbb")); // Output: 3
    


module.exports = { longestSubstring };


