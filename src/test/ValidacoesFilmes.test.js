import ValidacoesFilmes from "../services/ValidacoesFilmes";

test("Validar se existe algum campo em branco", ()=>{
    expect(ValidacoesFilmes.ValidacoesFilmes("")).toBe(false)
})