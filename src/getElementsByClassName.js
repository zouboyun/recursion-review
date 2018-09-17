// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  // find a node, see if the parent node has the class name
  // if the parent node has any child
  // if the child node has the class name
  // repeat
  // console.log(document.getElementsByClassName(className));
  var result = [];
  var checkClassName = function(className, nodeName) {
    if (nodeName.classList !== undefined) {
      if (nodeName.classList.contains(className)) {
        result.push(nodeName);
      }
    }
    if (nodeName.childNodes.length !== 0) {
      nodeName.childNodes.forEach(item => {
        checkClassName(className, item);
      });
    }
  }
  checkClassName(className, document.body);
  return result;
};
