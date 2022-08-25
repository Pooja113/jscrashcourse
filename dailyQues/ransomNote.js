var canConstruct = function(ransomNote, magazine) {
   if (magazine.includes(ransomNote)) {
    return true;
   }
   return false;
    
};

a = "ac", b = "aab"
console.log(canConstruct(a,b))   