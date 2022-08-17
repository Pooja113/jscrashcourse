var selectionSort = function(array){
  for (let i = 0; i < array.length; i++) {
    var last = array.length-i-1;
    var maxNum = 0;
    for (let index = 0; index <= last; index++) {
      if (array[maxNum] < array[index]) {
        maxNum = index;
      }
    }
        let temp = array[last];
        array[last] = array[maxNum];  
        array[maxNum]=temp
      
  }
  return array;
}
var arr = [ 1,-1,3];
console.log(selectionSort(arr))