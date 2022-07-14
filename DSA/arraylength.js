let nums = [2,7,11,15,2,2,'4'];

function arrlen(nums){
    let count = 0;
    while (nums[count] !== undefined) {
        count++
    }
    return count;
}

console.log(arrlen(nums))



