var finalValueAfterOperations = function(operations) {
  let answer = 0;
  for(const operation of operations)
  //console.log(operation );
    answer = operation[1] === "+" ? answer + 1 : answer - 1;
  return answer;
};

var operations = ["--X","X++","X++"]
console.log(finalValueAfterOperations(operations))