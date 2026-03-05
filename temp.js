let arr = [1,1,2,2,3,43,43,234,34,352,2]

function count (arr){
    let obj = {};
    for(var i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]] += 1
    }
    else {
      obj[arr[i]] = 1
    }
}
return obj
}

console.log(count(arr))

// console.log(typeof null);










