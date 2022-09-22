var Participante = /** @class */ (function () {
    function Participante() {
    }
    Participante.prototype.definirSexo = function (sexo) {
        this.sexo = sexo;
    };
    return Participante;
}());
var usuario = new Participante();
usuario.idade = 40;
usuario.humor = 'Boladona';
usuario.definirSexo('Mulher');
