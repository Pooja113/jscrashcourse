var mostWordsFound = function(sentences) {
  let max = 0;
    for (const sen of sentences) {
      let res = sen.split(" ");
      max= Math.max(max,res.length);
      //console.log(max)
      
    }
    return max
};

var operations = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(mostWordsFound(operations))