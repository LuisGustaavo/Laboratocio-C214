const validate = require('validate.js');
const OperacoesConstraint = require('./validate');

const Operacoes = {
    soma(numero){
        const validateNumero = validate({numero}, OperacoesConstraint.operacoesConstraint );
        if(validateNumero !== undefined){
            return 'Error';
        }
        var p = numero + 5;
        return p;
    },

    subtracao(numero){
        const validateNumero = validate({numero}, OperacoesConstraint.operacoesConstraint );
        if(validateNumero !== undefined){
            return 'Error';
        }
        var o = numero - 1;
        return o;
    },

    multiplicacao(numero){
        const validateNumero = validate({numero}, OperacoesConstraint.operacoesConstraint );
        if(validateNumero !== undefined){
            return 'Error';
        }
        var l = numero * numero;
        return l;
    },

    divisao(numero){
        const validateNumero = validate({numero}, OperacoesConstraint.operacoesConstraint );
        if(validateNumero !== undefined){
            return 'Error';
        }
        var k = numero / 1;
        return k;
    }

}

module.exports = Operacoes;