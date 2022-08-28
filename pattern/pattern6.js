var patterns = function(n){
  for (let row = 1; row <= n; row++) {
    for (let col = row; col > 0; col--) {
      process.stdout.write(col+" "); 
    }
    console.log(" ")       
  }
}

patterns(5)