var addBinary = function(a,b){
  let carry = 0;
  let ans = "";
  for (let i = a.length-1,j = b.length-1; i >= 0||j >= 0; i--,j--) {
    const sum =  (+a[i] || 0) + (+b[j] || 0) + carry;
    ans = sum % 2 + ans;
    carry= Math.trunc(sum/2)
  }
  if(carry){
    ans = "1" + ans;
  } 
  return ans
}
a = "1010", b = "1011"
console.log(addBinary(a,b)) 