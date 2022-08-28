var patterns = function(n){
  for (let row = 0; row < n; row++) {
    let alp = "A";
    alp = String.fromCharCode(alp.charCodeAt(0) + row)
    for(let col = 1; col <=n; col++) {
      process.stdout.write(alp+" "); 
      alp=String.fromCharCode(alp.charCodeAt(0) + 1)
    }
    console.log(" ")
    
  }
}

patterns(3)