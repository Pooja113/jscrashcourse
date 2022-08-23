var patterns = function(n){
  var totalN= 2*n-1;
  for (let row = 0; row < totalN; row++) {
    for (let col = 0; col < totalN; col++) {
      let val= n-Math.min(Math.min(row,col),Math.min(totalN-row-1,totalN-col-1))
      process.stdout.write(val+" ");
    }
    console.log(" ") 
  }
}

patterns(4)