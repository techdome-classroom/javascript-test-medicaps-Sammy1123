function longestSubstring(s) {
    let maxLength = 0; // to store the maximum length found
    let start = 0; // left pointer of the sliding window
    let charIndexMap = new Map(); // to store the latest index of each character

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        // If the character is found in the map and its index is within the bounds of the current window
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
            start = charIndexMap.get(currentChar) + 1; // move the start right after the last occurrence
        }

        // Update the latest index of the character
        charIndexMap.set(currentChar, end);
        
        // Calculate the length of the current substring
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

module.exports ={longestSubstring} ;
