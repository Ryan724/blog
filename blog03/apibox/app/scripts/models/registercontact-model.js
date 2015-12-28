define(['talent'], function(talent){
	var RegisterContactModel = talent.Model.extend({
		defaults:{
        	RegisterID:null,
        	Ordinal:null,
        	LinkMan:null,
        	JobTitle:null,
        	LinkPhone:null,
        	Subscript:null,
        	Contract:null,
        	Disable:null
     	}   
		initialize: function(){
        //alert('Hey, you create me!');
    	}
});
	return RegisterContactModel;

});