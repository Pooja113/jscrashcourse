//448. Find All Numbers Disappeared in an Array
var findDisappearedNumbers = function(array){
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
  let res = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index]!=index+1) {
      res.push(index+1)
    }      
  }
  return res;
  
}
var arr = [1,1]
console.log(findDisappearedNumbers(arr))