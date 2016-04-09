setTimeout与this
===================
###问题的开始：
```javascript
	function fun(){
		doSomething();
		setTimeout(func,10)
	}
	fun();
```
###提问
	－ 这个是递归调用吗？
	－ 准确表达是：是fun自己调用自己吗？
	－ 或者：后执行的fun可以访问到前执行fun中的参数吗？

###怎么考虑这个问题
预测：
	1. 是自己调用，可以访问上一个调用着
	2. 是顶级对象调用（global，window）
	3. 是最初父级对象调用

关注点始终在调用，我们通过this就可以观察，this是方法的持有者

```javascript
function obj() {
	this.fn = function() {
		alert("ok");
		console.log(this);
		setTimeout(this.fn, 1000); //直接使用this引用当前对象  
	}
}
var o = new obj();
o.fn();
```
###结论
 setTimeout是顶级对象调用


