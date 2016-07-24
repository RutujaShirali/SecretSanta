function add(a,b){
	return a + b;
}
QUnit.test("testing Secret Santa",1,function(assert){
		var a= 1;
		var b = 2;
		var actualSum = add(a,b);
		var expectedSum = 3;
		assert.equal(actualSum, expectedSum, "add works!!!!");
	});
