var patterns = function(n){
 
  for (let row = 1; row <= n; row++) {
    for (let col = 0; col < row; col++) {
      process.stdout.write((row+col)+" "); 
    }
    console.log(" ")       
  }
}

patterns(5)