var patterns = function(n){
  let count=1;
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      process.stdout.write(count+" "); 
      count++;
    }
    console.log(" ")       
  }
}

patterns(5)