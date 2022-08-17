//287. Find the Duplicate Number
var findErrorNums = function(array){
  let i = 0;
  while (i<array.length) {
    if (array[i]!=i+1) {
      let temp = array[i];
      if (array[temp-1]!=temp) {
        array[i] = array[temp-1]; 
        array[temp-1]=temp
      }else{
        i++;
      } 
    } else {
        i++;
    }      
  }
  //return array
  //let res = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index]!=index+1) {
      return [array[index],index+1]
    }      
  }
  return [-1,-1]
  
}
var arr = [3,2,2]
console.log(findErrorNums(arr))