var patter15= function(n){
for (let row = 0; row < n; row++) {
  for (let col = 1; col <= n-row; col++) {
    process.stdout.write(col+""); 
  }
  for (let col = 0; col <row*2 ; col++) {
    process.stdout.write("*"); 
  }
  for (let col = n-row; col >= 1; col--) {
    process.stdout.write(col+""); 
  }
  console.log("")
}
}

patter15(5)