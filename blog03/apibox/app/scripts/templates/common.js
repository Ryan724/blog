define(function(){

  this["JST"] = this["JST"] || {};

  this["JST"]["common/layouts/empty-layout"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div id="main-region"></div>';}return __p};

  this["JST"]["common/layouts/master-layout"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<!-- <div id="header-region" class="row"></div> -->\n\n<div id="content-wrapper" class="row">\n\t<!-- <div id="sidebar-region" class="col-md-3"></div> -->\n\t<div id="main-region" class="col-md-8"></div>\n</div>\n<!-- <div id="footer-region" class="row"></div> -->\n\n';}return __p};

  this["JST"]["common/page-regions/footer"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '';}return __p};

  this["JST"]["common/page-regions/header"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '';}return __p};

  this["JST"]["common/page-regions/sidebar"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '';}return __p};

  return this["JST"];

});