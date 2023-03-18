import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Prueba en <DemoComponent />', () => {
    test('getSaludo debe retornar "Hola Kevin"', () => {
        const name = 'Kevin';
        const message = getSaludo(name);

        expect(message).toBe('Hola ' + name);
    })
})