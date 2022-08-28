var patterns = function(n){

  for (let row = 1; row <= n; row++) {
    if (row%3==1) {
      console.log(" ") 
    }
      process.stdout.write(row+" ");    
  }
}

patterns(18)