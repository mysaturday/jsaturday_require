var mocha = require('mocha');
var should = require('should');

describe('# jSaturday_require', function(){

	it('# Should return error if was not passed array or string', function(done){
		try{
			var jSatRequire = require('../index')({});
		}catch(err){
			err.message.should.equal('Argument must be string or array');
			done();	
		}	
	});	

	it('# Should return original module if not in custom folder', function(done){
		var jSatRequire = require('../index')(__dirname + '/Custom_Folder');
		var debug = jSatRequire('debug');
		done();
	});

	it('# Should overwrite module if present in Custom', function(done){
		var jSatRequire = require('../index')(__dirname + '/Custom_Folder');
		var test = jSatRequire('env-settings');
		test.should.equal('IT IS WORKING');
		done();
	});

});