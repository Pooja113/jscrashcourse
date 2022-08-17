//41. First Missing Positive

var firstMissingPositive = function(nums) {
  let i = 0;
    while (i<nums.length) {
      if (nums[i]==i+1) {
        i++
      } else {
          let temp = nums[i];
          if (temp!=nums[temp-1] && temp>0 && temp<=nums.length) {
            nums[i]= nums[temp-1];
            nums[temp-1]=temp
          } else {
            i++
          }
    
      }
    }
    //return nums;
    for (let index = 0; index < nums.length; index++) {
      if (nums[index]!=index+1) {
        return index+1
      }
      
    }
};

nums =[3,4,-1,1]
console.log(firstMissingPositive(nums))