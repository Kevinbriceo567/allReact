describe('Prueba en <DemoComponent />', () => {
    test('Esta prueba no debe de fallar', () => {
        // 1. Inicianilzacion
        const message1 = 'Hola';

        // 2. Estimulo
        const message2 = message1.trim();

        // 3. Observar comportamiento
        expect(message1).toBe(message2);
    })
})