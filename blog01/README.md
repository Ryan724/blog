基于node的命令行开发
===========
每次和电脑直接的交互都是给电脑下达一定的指令，电脑根据指令调用执行相应任务。
（待~~~~）
##npm line 方式
### 一. 操作流程
1. 我们在开发的目录下，编写一个最简单的node可执行文件`a.js`
```javascript
    #!/usr/bin/env node
    console.log('hello Ryan');
```
`#!/usr/bin/env node`这句很重要，后面解释。

2. 建立package.json文件
```javascript
{
    "name":"npm-link",
    "bin":{
        "ryan":"a.js"
    }
}
```

3. 在该文件夹下执行`npm link`

4. 可在任意文件夹下运行`ryan`

### 二. 问题就来了
> - npm link执行，发生了什么?
> - 命令行输入`ryan`,怎么调用的？

**第一个问题**  npm link执行，发生了什么?

官方解释[点这里][1];

```shell
cd ../dev/node-redis
npm link  
```
在开发的目录下执行`npm link`,会在npm全局的文件夹根据package.json的描述创建引用文件指向本地
```shell
cd ../dev/node-bloggy
npm link redis
```
在其他要用到`redis`的文件夹下执行`npm link redis`,该文件夹
下的node_modules文件夹夹的向redis所在文件的引用文件
npm link的源码文件中的注解说的相当明白：
```javascript
// link with no args: symlink the folder to the global location
// link with package arg: symlink the global to the local
```

----------------------------------
我在windows环境下相应开发文件夹下执行`npm link`
1. npm全局的文件夹`~\AppData\Roaming\npm`目录下多了两个文件：`ryan`,`ryan.cmd`
> - `ryan`是shell编程的，在linux下调用
> - `ryan.cmd` dos编程，在windows调用

2. 相应的在全局的node_moudules多一个npm-link的引用文件夹

**注：** package.json如果不写name属性，会导致node_moudules文件直接是引用文件夹，所以**name属性是必须的**。

问题就来了**为什么生成ryan的文件的？而不是其他的？**
这就看npm link 命令都做了什么!
```javascript
function link (args, cb) {
	....
  if (args.length) return linkInstall(args, cb)
  linkPkg(npm.prefix, cb)
}
function linkInstall (pkgs, cb) {...} 
function linkPkg (folder, cb_) {...}
```
`linkInstall`：引用链接到
bulid.js

**第二个问题**  命令行输入`ryan`,怎么调用的？




[1]:https://docs.npmjs.com/cli/link/
