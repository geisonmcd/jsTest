iniciaFatoresPrimos = function(param) {
	console.log("Fatores primos de " + param + ": " + encontraFatoresPrimos(param));
}

encontraFatoresPrimos = function(num) {
	var fatores = [];
	var a = num; 
	for (var i = 2; i <= a; i++) {
		while( a % i == 0) {
			fatores.push(i);
			a = a / i;
		}
	}
	return fatores;
}

if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
	module.exports = encontraFatoresPrimos;
}

iniciaFatoresPrimos(process.argv[2]);