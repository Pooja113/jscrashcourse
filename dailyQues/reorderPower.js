var reorderedPowerOf2 = function(n) {
  let strConv   = n.toString()
  strConv = strConv.split("").sort().join(""); 
     


  for (let i = 0, t = 1; i < 30; i++, t <<= 1) {
    let convertedPower = t.toString();
    convertedPower = convertedPower.split("").sort().join(""); 
    console.log(convertedPower)
    if (strConv == convertedPower) return true;
  }
  return false;
};

n = 10
console.log(reorderedPowerOf2(n))