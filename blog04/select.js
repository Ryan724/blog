
function select(arr){
	var l = arr.length-1;
	while (l > 0) {
		var min = arr[arr.length-l-1];
		var minIndex = arr.length-l-1;
		for(var i = arr.length-l ; i <arr.length;i++){
			if(min>arr[i]){
				min = arr[i];
				minIndex = i;
			}
		}
		if(arr.length-l-1!==minIndex){
			arr[minIndex] += arr[arr.length-l-1]
			arr[arr.length-l-1] =arr[minIndex]-arr[arr.length-l-1];
			arr[minIndex] =arr[minIndex]-arr[arr.length-l-1];
			
		}
		l--;
	}
	console.log(arr)
}
select([5,34,76,82,2,43,21,45,5])
