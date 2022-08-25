var prod = function(n){
  if (n%10==n) {
    return n
  }
  return n%10 * Math.trunc(prod(n/10))
}
n = 432
console.log(prod(n))   
//679,927