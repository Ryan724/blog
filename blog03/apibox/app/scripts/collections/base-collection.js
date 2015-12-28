define(['talent'], function(talent){

	return  talent.Collection.extend({
		request:function(options){

			var deferred = new talent.$.Deferred;

			options = talent._.extend({}, options);
			
			options.url = options.url || this.url;
			options.url = talent.Context.getApiUrl(options.url);

			if(options.mockData){
				action(options.mockData);
			}else{
				talent.$.ajax(options).done(action);	
			}
			
			return deferred.promise();

			function action(resp){

				var code = resp.Code;
				if(code == 1){
					var data = resp.Data;
					if(resp.ExtendedData){
						data = talent._.extend({},resp.Data,resp.ExtendedData);
					}
					deferred.resolve(data);
				}else{
					if(code == 401){
						login();
					}
					deferred.reject(resp.Message);
				}
			}

			function login() {
				//alert('请重新登录。\n您的会话超时，或者帐户已经从其它地方登录。\n点击“确定”后，自动转入登录页面。');
				location.href = talent.Context.getLoginUrl();
				throw new Error('401');
			}
		}
		,batch:function(options){
			
			//只能用get请求
			var deferred = new talent.$.Deferred;
			var urls = [];
			options = talent._.extend({}, options);
			options.url = options.url || this.url;
			for(var i= 0;i< options.url.length;i++){
				urls.push(talent.Context.getApiUrl(options.url[i]))
			}
			if(options.mockData){
				action(options.mockData);
			}else{
				talent.$.ajax({
					url:talent.Context.getApiUrl('batch'),
					type:'POST',
					headers:{
						"x-bs-batch": 1
					},
					data:"['" + urls.join("','") + "']",
					contentType:'application/json; charset=UTF-8'
				}).done(action);	
			}
			return deferred.promise();

			function action(resp){
				//data为字符串 转数组
				for(x in resp){
					resp[x].Data = eval ( "(" + resp[x].Data +")");
				}

				deferred.resolve(resp);
			}
			
		}
	});
});