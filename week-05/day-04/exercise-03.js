const PENDING = 0;
const FULFILLED = 1;
const REJECTED = -1;

class MyPromise {
	constructor(inputFunction){
		this.state = PENDING;
		this.value = null;
		this.errorHandlers = [];
		inputFunction(this.fulfilled.bind(this),this.rejected.bind(this));
	}
	
	fulfilled(value) {
		this.state = FULFILLED;
		this.value = value;
	}
	
	rejected(error) {
		this.state = REJECTED;
		this.value = error;
	}
	
	catch(onRejected) {
		this.errorHandlers.push(onRejected);
		return onRejected(this.value);
	}
	
	then(onFulfilled, onRejected) {
		if(typeof(onFulfilled)!=='function'||typeof(onFulfilled)!=='function'){
			return onRejected(this.value);
		}
		else{
			return onFulfilled(this.value);
		}
	}
}

var a = new MyPromise(function(resolve,rejected){
	resolve(10);
//	rejected(30);
}).then(function(value){console.log(value*2)},function(err){console.log(err)})
//.catch(function(err){console.log(err*2)});

