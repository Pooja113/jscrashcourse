var cyclicSort = function(array){
  let i = 0;
  while (i<array.length) {
    if (array[i]==i+1) {
      i++
    } else {
      let temp = array[i];
      array[i] = array[temp-1];  
      array[temp-1]=temp
    }      
  }
  return array;
}
var arr = [ 1]
console.log(cyclicSort(arr))