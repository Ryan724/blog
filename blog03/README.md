#js 模拟弹簧运动

----------------------------------
速度图

![Alt text](https://raw.githubusercontent.com/Ryan724/Ryan-blog/master/image/spring.png)
```javascript
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

function quick(arr,start,end){
	if(start==end)return;
	var flag = arr[start];
	var maxIndex ;
	debugger
	for(var i = start;i<end-start+1;end++){
		if(flag<arr[i]){
			maxIndex = i;
		}
		if(flag>arr[i]){
			arr[i] += arr[maxIndex]
			arr[maxIndex] =arr[i]-arr[maxIndex]
			arr[i] =arr[i]-arr[maxIndex]
		}
	}
		arr[start] += arr[maxIndex]
		arr[maxIndex] =arr[start]-arr[maxIndex]
		arr[start] =arr[start]-arr[maxIndex]
		quick(arr,start,maxIndex-1);
		quick(arr,maxIndex+1,end);
		console.log(arr)
}
var arr= [5,34,76,82,2,43,21,45,5];
quick(arr,0,arr.length-1)

```
