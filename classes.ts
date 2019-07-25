class Personne {
	public static nombre: number = 0;
	private _name: string;

	constructor(a: string) {
		this._name = a;
		Personne.nombre++;
	}

	get name(): string {
		return this._name;
	}

	direBonjour() {
		console.log("Bonjour je m'appelle : " + this._name);
	}
}

class Employer extends Personne {
	private _poste: string;

	constructor(a: string, p: string) {
		super(a);
		this._poste = p;
	}

	get poste(): string {
		return this._poste;
	}

	direBonjour() {
		super.direBonjour();
		console.log(this._poste);
	}
}

let a: Employer;

a = new Employer('Mawatta Camara', 'PDG');

a.direBonjour();

let b: Personne;

b = new Personne('Laby Damaro Camara');

console.log('vous avez crée ' + Employer.nombre + ' Objet(s)');
