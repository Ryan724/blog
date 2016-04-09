JSON字符串转换的三种方式
Write  Preview
h1 h2 h3      B i        Edit mode:  

#JSON字符串转换的三种方式

json字符串

`{ "prop": "val" }` 是个合法的JSON，
`{ prop: "val" }` 和 `{ 'prop': 'val' }` 是不合法的JSON
##解析JSON的三种方式
```javascript
var jsonObj = eval("("+ jsonStr+")") 
var jsonObj = (new Function("return " + jsonStr))();
var jsonObj = JSON.parse(jsonStr)
```
三种方式使用差异，性能差异

<table>
<tbody>
<tr><td><em>方式</em></td><td><em>安全</em></td><td><em>效率</em></td><td><em>是否有合法性要求</em></td></tr>
<tr><td> parse</td><td> 安全 </td><td> 高 </td><td> 有</tr>
<tr><td> new Function</td><td> 不安全 </td><td> 低，不稳定 </td><td> 无</tr>
<tr><td> eval </td><td> 不安全 </td><td> 低，不稳定 </td><td> 无</tr>
</tbody>
</table>
##安全性检验代码
```javascript
var value = 1;
var jsonstr = '{"data1":"hello","data2":++value}';
console.log(eval('('+jsonstr+')')); //此时value=2
console.log((new Function("return " + jsonstr))()); //此时value=3
console.log(JSON.parse(jsonstr)); //报错
```
##效率检验代码
```javascript
 function buildJson(){
	var str = '{"aa":"aa",'
	for(var i = 0 ; i < 10000;i++){
		str +='"aa'+i+'":"aa",'
	}
	str +='"aaa":"aa"}'
	return str;
}

(function useParse(){
	var str =buildJson();
	var startTime = (new Date()).getTime();
	JSON.parse(str);
	var parseTime =(new Date()).getTime()-startTime;
	var startTime = (new Date()).getTime();
	eval("("+str+")");
	var evalTime =(new Date()).getTime()-startTime;
	var startTime = (new Date()).getTime();
	(new Function("return " + str))()
	var funTime =(new Date()).getTime()-startTime;
	console.log("JSON.parse解析使用时间："+parseTime,"eval解析使用时间："+evalTime,"function解析使用时间："+funTime)
})()
//JSON.parse解析使用时间：9 eval解析使用时间：35 function解析使用时间：47
//JSON.parse解析使用时间：30 eval解析使用时间：142 function解析使用时间：121
//JSON.parse解析使用时间：16 eval解析使用时间：42 function解析使用时间：47
//JSON.parse解析使用时间：11 eval解析使用时间：32 function解析使用时间：19
//JSON.parse解析使用时间：5 eval解析使用时间：28 function解析使用时间：30
```
