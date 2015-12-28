define(['talent', 'models/registercontact-model'], function(talent, RegisterContactModel){
return  talent.Collection.extend({
      model:RegisterContactModel,
       

});
});