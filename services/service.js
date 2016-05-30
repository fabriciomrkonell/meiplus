'use strict';

module.exports = {
	isAutenticate: function(req, res, next){
		if(req.user){
			next()
		}else{
			res.redirect('/login');
		}
	},
	isNullOrEmpty: function(a){
  	return (a == null) || (a == "") || !!(a.match(/^\s+$/));
	},
	getYear: function(date){
  	return date.substr(4,4);
	},
	getMonth: function(date){
  	return date.substr(2,2);
	},
	getDay: function(date){
  	return date.substr(0,2);
	}
};