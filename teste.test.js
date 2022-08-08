const {soma, multiplica} = require("./script2")


  describe("SOMA", ()=>{
    it('Teste de Soma',()=>{
      expect(soma(6,7)).toBe(13)
    })
  })


  describe("MULTIPLICA", ()=>{
    it('Teste de Multiplicação',()=>{
      expect(multiplica(6,7)).toBe(42)
    })
  })