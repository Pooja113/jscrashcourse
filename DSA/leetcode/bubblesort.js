var bubblesort = function(array){
  let swap=true;
  for (let i = 0; i < array.length; i++) {
    swap=false;
    for (let j = 1; j < array.length-i; j++) {
      if (array[j]<array[j-1]) {
        let temp = array[j];
        array[j] =array[j-1];
        array[j-1]=temp
        swap=true
      }   
    }
    if (!swap) {
      break;
    } 
  }
  return arr;
}
var arr = [ -1];
console.log(bubblesort(arr))