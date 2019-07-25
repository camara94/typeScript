class Personnes {
    constructor(a, b) {
        this._nom = a;
        this._age = b;
    }
    get nom() {
        return this._nom;
    }
    get age() {
        return this._age;
    }
}
let p;
p = new Personnes('Laby Damaro', 24);
console.log("Je m'appelle " + p.nom + " et j'ai " + p.age + ' ans');
