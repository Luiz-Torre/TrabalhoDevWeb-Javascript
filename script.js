function Loja(nome, tipo, descricao,cnpj){
    this._nome = nome;
    this._tipo = tipo;
    this._descricao = descricao;
    this._cnpj = cnpj;
}

Object.defineProperties(Loja.prototype,{
        nome:{
            get: function(){
                return this._nome;
            },
            set: function(nome){
                this._nome = nome;
            }
        },
        tipo:{
            get: function(){
                return this._tipo;
            },
            set: function(tipo){
                this._tipo = tipo;
            }
        },
        descricao:{
            get: function(){
                return this._descricao;
            },
            set: function(descricao){
                this._descricao = descricao;
            },
        },
        cnpj:{
                get: function(){
                    let cnpjmascara = this._cnpj
                    cnpjmascara = this._cnpj.replace(/(\d{2})?(\d{3})?(\d{3})?(\d{4})?(\d{2})/, "$1.$2.$3/$4-$5")
                    return cnpjmascara;
                },
                set: function(cnpj){
                    this._cnpj = cnpj;
                },
        }
    });




const array = [
    {nome: 'Outback', tipo: 'Gastronomia', descricao: 'Restaurante de comida Australiana', cnpj: '12345678911111'},
    {nome: 'Cinemark', tipo: 'Cinema', descricao: 'Uma das maiores redes de cinema do Brasil', cnpj: '12345678922222'},
    {nome: 'BaccioDiLatte', tipo: 'Gastronomia', descricao: 'Uma das maiores redes de gellato italiano do Brasil', cnpj: '12345678933333'},
];

let a = new Loja('a', 'b', 'c','12345678911111');
let b = new Loja('a', 'b', 'c','12345678911111');
console.log(a)
console.log(b)

const arrayObjetos =[]




