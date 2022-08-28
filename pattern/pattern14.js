var patterns = function(n){
  for (let row = 1; row <= n; row++) {
    for(let col = row; col<n; col++) {
      process.stdout.write(" "); 
    } 
    for(let col = 1; col<=row; col++) {
      process.stdout.write(col+""); 
    } 
    for(let col = row-1; col>=1; col--) {
      process.stdout.write(col+""); 
    } 
   console.log(" ")
    
  }
}

patterns(5)