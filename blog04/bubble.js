function bubble(arr) {
	var l = arr.length-1;
	while (l > 0) {
		for(var i = 0 ; i <l;i++){
			if(arr[i]>arr[i+1]){
				arr[i] +=arr[i+1];
				arr[i+1] =arr[i]-arr[i+1];
				arr[i] = arr[i]-arr[i+1];
			}
		}
		l--;
	}
	console.log(arr)
}
bubble([5,34,76,82,2,43,21,45,5])
