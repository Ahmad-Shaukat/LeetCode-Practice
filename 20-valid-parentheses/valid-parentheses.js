/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let parentheses = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    for (let i = 0; i < s.length; i++) {
        if (Object.keys(parentheses).includes(s[i])) {
            if (stack.length > 0 && stack[stack.length - 1] === parentheses[s[i]]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }
    
    return stack.length === 0;
};