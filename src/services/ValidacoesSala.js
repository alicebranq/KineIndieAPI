import ValidacoesService from "./ValidacoesService.js";

class ValidacoesSala extends ValidacoesService{

/*    
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        dimensao VARCHAR,
        capacidade INTEGER,
        lucratividade DECIMAL(10, 2),
        exibicoes VARCHAR
 */
     /**
     * 
     * @param 
     * @returns 
     */
      static validaDimensao(nome){
        return 
    }

    /**
     * 
     * @param 
     * @returns boolean
     */
    static validaCapacidade(){
        return 
    }

   /**
    * 
    * @param {Number} valor 
    * @returns boolean
    */
    static validaLucratividade(valor){
        let RegExp = /[,|.|\$|R]/g 
        let valorClean = valor.replaceAll(RegExp,"")
        valorfloat = parseFloat(valorClean)
        if(valorfloat != Number){
            return false
        }
            return true
    }

/**
 *  exibições é do tipo SMALLDATETIME
 * @returns boolean
 */
    static validaExibicoes(){
        return 
    }
    


    /**
     * 
     * @param {}  
     * @param {} 
     * @param {}  
     * @returns boolean
     */
    static isValid(id, dimensao, capacidade, lucratividade, exibicoes){
        return this.validaDimensao() && this.validaCapacidade(telefone) && this.validaLucratividade() && this.validaExibicoes()
    }

}

export default ValidacoesSala