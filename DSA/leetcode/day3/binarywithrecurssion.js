 var search = function(nums, target, start =0,end = nums.length) {
  if(start>end){
      return -1
  }
  let mid = Math.trunc((start+end)/2);
  if(nums[mid]==target){
         return mid
   }
  
  if(nums[mid]>target){
     return search(nums, target, start,mid-1) 
   }else{
      return search(nums, target, mid+1,end) 
     }
};

var arr = [-1,0,3,5,9,12];
console.log(search(arr,9))