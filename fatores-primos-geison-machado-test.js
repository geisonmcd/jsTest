var fatoresPrimos = require('./fatores-primos-geison-machado.js');

describe("Testa Fatores Primos", function() {
    
    it('fatores primos de 6 devem ser 2 e 3', function() {
        expect(fatoresPrimos(6)).toEqual([2,3]);
    });
    
    it('fatores primos de 100 devem ser 2,2,5 e 5', function() {
        expect(fatoresPrimos(100)).toEqual([2,2,5,5]);
    });
    
    it('fatores primos de 198 devem ser 2,3,3,11', function() {
        expect(fatoresPrimos(198)).toEqual([2,3,3,11]);
    });
    
    it('fatores primos de 276 devem ser 2,2,3,23', function() {
        expect(fatoresPrimos(276)).toEqual([2,2,3,23]);
    });
    
    it('fatores primos de 7 deve ser 7', function() {
        expect(fatoresPrimos(7)).toEqual([7]);
    });
    
});
