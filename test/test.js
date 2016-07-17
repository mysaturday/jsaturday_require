var jSatRequire = require('../index')({
	baseDir: __dirname,
	customFolder: 'Custom_Folder'
});
var mocha = require('mocha');
var should = require('should');

describe('# jSaturday_require', function(){

	it('# Should return original module if not in Custom', function(done){
		var debug = jSatRequire('debug')
		done();
	});
	it('# Should overwrite module if present in Custom', function(done){
		var test = jSatRequire('env-settings')
		test.should.equal('IT IS WORKING');
		done();
	});

});