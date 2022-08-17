//268. Missing Number

  var missingNumber = function(array){
    let i = 0;
    while (i<array.length) {
      if (array[i]<array.length && array[i]!=i) {
        let temp = array[i];
        array[i] = array[temp];  
        array[temp]=temp
      } else {
          i++;
      }      
    }
    for (let index = 0; index < array.length; index++) {
      if (array[index]!=index) {
        return index;
      }      
    }
    return array.length;
    
  }
var arr = [3,0,1]
console.log(missingNumber(arr))