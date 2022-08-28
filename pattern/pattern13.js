var patterns = function(n){
  for (let row = 0; row <= n; row++) {
    for(let col = 0; col<row; col++) {
      process.stdout.write(" "); 
    } 
    for(let col = row; col<n; col++) {
      process.stdout.write((col+1)+""); 
    } 
   console.log(" ")
    
  }
}

patterns(5)