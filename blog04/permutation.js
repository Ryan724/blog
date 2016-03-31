function permutations(arr){
    var result =[];
    if(arr.length==1) return arr[0];
    if(arr.length==2) return full(arr[0],arr[1])
    for(var i = 0 ; i < arr.length ; i++){
        var  temp = arr[i];
        var remain = remove(arr,i);
        result = result.concat(full(temp,remain));
    }
    result = uniq(result);
    return result;
}
function uniq(arr){
    var result = [];
    for(var i =0;i<arr.length;i++){
        if(result.indexOf(arr[i])<0) result.push(arr[i])
    }
    return result;
}
function full(a,b){
    if(typeof b =="number"){
        return [a+""+b,b+""+a];
    }else{
        b = permutations(b);
        var result = [];
        for(var i=0;i< b.length;i++){
            result.push(b[i]+""+a);
            result.push(a+""+b[i]);
        }
        return result;
    }
}
function remove(arr, index){
    var result = [];
    for(var i =0;i<arr.length;i++){
        if(i!=index) result.push(arr[i])
    }
    return result;
}

console.log(permutations([1,2,3,4,5,6]))