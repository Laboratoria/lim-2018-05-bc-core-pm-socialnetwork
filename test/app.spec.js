require('../src/js/app');

describe('app', () => {
    describe('register', () => {
        it('es una funcion', () => {
            assert.isFunction(register);
        });
        it('funciona', () => {
            register((error, response) => {
                if (error) {
                    console.error(error)
                } else {
                    console.log(response)
                }
            })
        })
    })
})
describe('app', () => {
    describe('signIn', () => {
        it('es una funcion', () => {
            assert.isFunction(signIn);
        });
        it('funciona', () => {
            signIn((error, response) => {
                if (error) {
                    console.error(error)
                } else {
                    console.log(response)
                }
            })
        })
    })
})


/* describe('login',()=>{
    it('deberia ser una función register',()=>{
        assert.isFunction(register);
    });
}); */