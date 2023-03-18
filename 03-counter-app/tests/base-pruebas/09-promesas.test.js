import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un héroe', (done) => {
        done();
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(true).toBe(false);
                done();
            });
    })
})