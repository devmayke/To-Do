const {soma, multiplica} = require("./script2")


  describe("SOMA", ()=>{
    it('Deve retornar 13',()=>{
      expect(soma(6,7)).toBe(13)
    })
  })
  


  describe("MULTIPLICACAO", ()=>{
    it('Deve retornar 42',()=>{
      expect(multiplica(6,7)).toBe(42)
    })
  })