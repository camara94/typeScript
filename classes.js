class Personne {
    constructor(a) {
        this._name = a;
        Personne.nombre++;
    }
    get name() {
        return this._name;
    }
    direBonjour() {
        console.log("Bonjour je m'appelle : " + this._name);
    }
}
Personne.nombre = 0;
class Employer extends Personne {
    constructor(a, p) {
        super(a);
        this._poste = p;
    }
    get poste() {
        return this._poste;
    }
    direBonjour() {
        super.direBonjour();
        console.log(this._poste);
    }
}
let a;
a = new Employer('Mawatta Camara', 'PDG');
a.direBonjour();
let b;
b = new Personne('Laby Damaro Camara');
console.log('vous avez crée ' + Employer.nombre + ' Objet(s)');
