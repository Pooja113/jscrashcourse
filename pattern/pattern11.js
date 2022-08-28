var patterns = function(n){
  for (let row = 1; row <= n; row++) {
    for(let col = n; col >= row; col--) {
      process.stdout.write(" "); 
      
    }
    for(let col = 0; col <row; col++) {
      process.stdout.write(row+""); 
    } 
    
   
   
    console.log(" ")
    
  }
}

patterns(5)