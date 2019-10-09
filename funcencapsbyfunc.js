//TORNANDO PUBLICOS COM OBJETO NO RETURN DA FACTORY FUNCTION

var createCounter = function() {
	var value = 0;
	return { 				//Esse return torna uma parte como publica
		add: function() {
		return ++value;
		}
	};

};

var counter = createCounter();

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

//TORNANDO PUBLICO COM OBJ NO RETURN DA CONSTRUCTOR FUNCTION

var Counter = function() {
	var value = 0;
	this.add = function() {
		return ++value;	
	};
};

var counter = new Counter();

console.log(counter.add());
console.log(counter.add());

//MODULE PATTERN FACTORY

var counter = (function() {
	var value = 0;
	return {
		add: function() {
			return ++value;
		}
	}

})();

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

//REVEALING MODULE PATTERN FACTORY

var counter = (function() {
	var _value = 0;				 //Por boas praticas nesse modo se usa o "_" para indicar o que e privado
	var _add = function() {
		return ++_value;
	}
	var _reset = function() {
		return _value = 0;
	}
	return {
		add: _add,
		reset: _reset
	}

})();

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
console.log(counter.reset());
console.log(counter.add());

