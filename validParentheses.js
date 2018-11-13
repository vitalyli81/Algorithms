/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var array = s.split('');
    var isOpen = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    var stack = [];
    var isValid = true;

    if (array.length == 0) {
        return true;
    } 
    if (s.length % 2 !== 0) {
        return false;
    }

    for (let i = 0; i < array.length && isValid; i ++) {
        var currentEl = array[i];
        var lastStackElem = stack[stack.length - 1] || 0;

        if (isOpen[currentEl]) {
            stack.push(isOpen[currentEl]);    
        } else if (lastStackElem === currentEl) {
            stack.pop();
        } else {
            isValid = false;
        }
    }

    if (stack.length) return false;

    return isValid;
};
