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
	}
};