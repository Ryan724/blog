
# 接口规范

--------------------------------

##  请求数据规范：


|类型      |      名称| 是否必须|    描述|      示例|
|:--------:|:--------:|:--------:|:--------|:--------|
|String    |         url|          是| 请求路径,<br>  - 本站请求写相对域名的链接, <br> - 跨站请求写完整链接 <br> - 路径单词首字母大写，例：`Dashboard`|   url : 'Dashboard/GetInfo' <br>  url : 'http://ocean/Dashboard/GetInfo' |
|String    |         method|          是| 请求方式|  method : 'POST' <br>  method : 'GET' |
|Object ／Array   |             data|          是| 请求参数|   data : {key1:value,key2:value2} <br>  data : [item1,item2....]|


#### 完整示例


```javascript

request:{

    url: 'Dashboard/GetInfo',

    method:'POST',

    data:{

            //..........

        }

}

```



## 返回数据规范：



|类型      |      名称| 是否必须|    描述|      示例|
|:--------:|:--------:|:--------:|:--------|:--------|
|Number    |         code|          是|响应状态标示 |   code:200 |
|Object ／Array   |             data|          是| 响应数据|   data : {key1:value,key2:value2} <br>  data : [item1,item2....]|

#### 完整示例

```javascript

response:{

    code: 200,

    data:{

            //..........

        }

}

```

## 常用字段说明 ： 


| 类型      |      名称|     描述 |   
| :--------: | :--------: | :--------: |
| String    |          d |        dashboard的id | 
| String    |          r |        component的id |


