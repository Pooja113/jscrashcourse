var mySqrt = function(x) {
  let ans ;
   for (let index = 0; index*index <= x; index++) {
      ans= index;
   } 
   return ans
};

console.log(mySqrt(0))