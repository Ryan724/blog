#Node Debugger 
@(Node)[javascript|笔记]

----------------------------------
[node 调试](http://blog.csdn.net/haidaochen/article/details/8570186)
##一. 安装node-inspector  
npm install -g node-inspector 
二. 调试模式运行
node --debug-brk app.js 
默认端口5858 
node --debug-brk[=3000] app.js  
启动监听node-inspector
node-inspector &  
修改端口
node-inspector  --web-port=[port]
三. 进入调试页面
http://[ip address]:8080/debug?port=5858


修改后自动重启
npm install supervisor -g
supervisor app.js
```
//要监控的文件夹或js文件，默认为'.'
-w|--watch <watchItems>
//要忽略监控的文件夹或js文件  
-i|--ignore <ignoreItems>
//监控文件变化的时间间隔（周期），默认为Node.js内置的时间
-p|--poll-interval <milliseconds>
//要监控的文件扩展名，默认为'node|js'
-e|--extensions <extensions>
//要执行的主应用程序，默认为'node'
-x|--exec <executable>
//开启debug模式（用--debug flag来启动node）
--debug
//安静模式，不显示DEBUG信息
-q|--quiet
```


Grunt 压缩
[uglify](http://www.cnblogs.com/artwl/archive/2013/11/29/3449303.html)
[enter link description here](http://segmentfault.com/a/1190000000343005)