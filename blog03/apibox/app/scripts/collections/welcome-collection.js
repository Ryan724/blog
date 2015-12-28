define(['talent', 'collections/base-collection'], function(Talent, BaseCollection) {

	return BaseCollection.extend({
		getIndexData: function(options) {
			var deferred = new Talent.$.Deferred();
			$.ajax({
				"url": "/Hello/index/getIndexInit",//Talent.Context.getApiUrl('login'),
				"type": "POST",
				"data": {inputParam:JSON.stringify(options)},
				"success": function(resp) {
					deferred.resolve(resp)
				}
			});
			return deferred.promise();
		},
		getDetailListData: function(options) {
			var deferred = new Talent.$.Deferred();
			$.ajax({
				"url": Talent.Context.getApiUrl('login'),
				"type": "POST",
				"data": {inputParam:JSON.stringify(options)},
				"success": function(resp) {
					deferred.resolve(resp)
				}
			});
			return deferred.promise();
		},
		register: function(options) {
			var deferred = new Talent.$.Deferred();
			$.ajax({
				"url": "/Hello/user/register",//Talent.Context.getApiUrl('login'),
				"type": "POST",
				"data":{inputParam:JSON.stringify(options)},
				"success": function(resp) {
					deferred.resolve(resp)
				}
			});
			return deferred.promise();
		},
		login: function(options) {
			var deferred = new Talent.$.Deferred();
			$.ajax({
				"url": Talent.Context.getApiUrl('login'),
				"type": "POST",
				"data":{inputParam:JSON.stringify(options)},
				"success": function(resp) {
					deferred.resolve(resp)
				}
			});
			return deferred.promise();
		},
		getPhoneCode: function(options) {
			var deferred = new Talent.$.Deferred();
			$.ajax({
				"url": Talent.Context.getApiUrl('login'),
				"type": "POST",
				"data":{inputParam:JSON.stringify(options)},
				"success": function(resp) {
					deferred.resolve(resp)
				}
			});
			return deferred.promise();
		},
		getCode: function(options) {
			var deferred = new Talent.$.Deferred();
			$.ajax({
				"url": Talent.Context.getApiUrl('login'),
				"type": "POST",
				"data": options,
				"success": function(resp) {
					deferred.resolve(resp)
				}
			});
			return deferred.promise();
		}
	})
})