//41. First Missing Positive

var pallindrom = function(x) {
  let nums = x.toString();
  start=0;
  end = nums.length-1;
  console.log(nums[start])
  arrCheck = Math.trunc(end/2);
  while (start<=arrCheck) {
    if (nums[start]==nums[end]) {
      start++;
      end--;
    } else {
      return false
    }
  }
  return true;
};

nums = 121
console.log(pallindrom(nums))