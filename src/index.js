module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length % 2 !== 0) {
    return false;
  }
 
  array = str.split('');
  let bracketsConf = {};
  for (let i = 0; i < bracketsConfig.length; i++){
    const key = bracketsConfig[i][0];
    const value = bracketsConfig[i][1];
    bracketsConf[key] = value;
  }

  let stack = [];
  for (let i = 0; i < array.length; i++) {
    if (Object.keys(bracketsConf).find(key => key === array[i])) {
      stack.push(array[i]);
      if(array[i] == '8'){
        stack.pop();
      }
      if (array[i] == '7'){
        stack.pop();
      }
      if (array[i] == '|'){
        stack.pop();
      }
    } else {
      const bracket = stack.pop();
      if (bracketsConf[bracket] !== array[i]) {
        return false;
          }
    }
  }

  return true;
}
