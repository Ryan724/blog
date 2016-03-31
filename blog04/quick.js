function swap(arr,a,b){
	var temp = arr[a];
	 arr[a]=arr[b];
	 arr[b]=temp;
}

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }

    }
    return items;
}
function swap(arr,a,b){
    var temp = arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}

function quickSort2(arr,start,end){
    	if(start==end)return;
    	var pivot = arr[start];
    	var maxIndex,endIndex,i = start;
    	while(i<arr.length) {
            if (pivot < arr[i]) {
                maxIndex = i;
                for (var j = i; j < arr.length; j++) {
                    if (pivot > arr[j]) {
                        endIndex = maxIndex;
                        swap(arr, maxIndex, j);
                        break;
                    }
                }
            }
            i++;
        }
    if(!maxIndex) endIndex = arr.length-1;
    swap(arr,start,endIndex);
    if(!endIndex) return;
    quickSort2(arr,start,endIndex-1)
    quickSort2(arr,endIndex+1,end)
}
var items= [3,2,1];
quickSort2(items, 0, items.length - 1);
console.log(items)