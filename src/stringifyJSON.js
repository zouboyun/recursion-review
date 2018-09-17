// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // Number, String, Boolean, Array, 
  // Objects, null, NaN, undefined, Date, Function
    //check typeof input
  //
  switch(typeof obj) {
    case 'number':
      return String(obj);
    case 'string':
      return '"' + obj + '"';
    case 'boolean':
      return String(obj);
    case 'object':
      if (obj instanceof Date) {
        return String(obj);
      } else if (Array.isArray(obj)) {
          var result = '['
          var changedArr = obj.map(item => {
            return stringifyJSON(item)})
          result += changedArr.join();
          result += ']';
          return result;
        } else if (obj === null) {
          return 'null';
        } else {
          var result = '{';
          for (var prop in obj) {
            if (typeof obj[prop] !== 'undefined' && typeof obj[prop] !== 'function') {
              result += stringifyJSON(prop);
              result += ':';
              result += stringifyJSON(obj[prop]); 
              result += ','; 
            }
          }
          if (result.length > 1) {
            result = result.slice(0, -1);
          }
          result += '}';
          return result;
        }
    case 'function':
      return null;
    case 'undefined':
      return null;
    default: 
      throw new Error;
    
 }  
};
