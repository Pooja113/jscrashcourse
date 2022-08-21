var repeatNum = function(nums) {
  let ans = 1;
  nums.forEach(num => {
      ans ^= num
      console.log(ans)

  });
  return ans
};

var arr = [2,3,3,4,2,6,6,4];
console.log(repeatNum(arr))