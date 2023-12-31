function printCharactersBetween(char1, char2) {
    const start = char1.charCodeAt(0);
    const end = char2.charCodeAt(0);
  
    const result = [];
    for (let i = Math.min(start, end) + 1; i < Math.max(start, end); i++) {
      result.push(String.fromCharCode(i));
    }
  
    console.log(result.join(' '));
  }