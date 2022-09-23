function Loja(nome, tipo, descricao, cnpj, image) {
    this._nome = nome;
    this._tipo = tipo;
    this._descricao = descricao;
    this._cnpj = cnpj;
    this._image = image;
}

Object.defineProperties(Loja.prototype, {
    nome: {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        }
    },
    tipo: {
        get: function () {
            return this._tipo;
        },
        set: function (tipo) {
            this._tipo = tipo;
        }
    },
    descricao: {
        get: function () {
            return this._descricao;
        },
        set: function (descricao) {
            this._descricao = descricao;
        },
    },
    cnpj: {
        get: function () {
            let cnpjmascara = this._cnpj
            cnpjmascara = this._cnpj.replace(/(\d{2})?(\d{3})?(\d{3})?(\d{4})?(\d{2})/, "$1.$2.$3/$4-$5")
            return cnpjmascara;
        },
        set: function (cnpj) {
            this._cnpj = cnpj;
        },
    },
    image: {
        get: function () {
            return this._image;
        },
        set: function (image) {
            this._image = image;
        },
    },
});



export {Loja};
