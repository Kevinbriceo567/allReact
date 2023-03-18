import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
    test('getUser debe retornar un string y un numero', () => {
        const retorno = retornaArreglo();
        console.log(retorno);

        const [letters, numbers] = retornaArreglo();

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(letters).toEqual(expect.any(String));

    })
})