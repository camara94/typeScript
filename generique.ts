class Personnes<T, V> {
	private _nom: T;
	private _age: V;

	constructor(a: T, b: V) {
		this._nom = a;
		this._age = b;
	}

	get nom(): T {
		return this._nom;
	}

	get age(): V {
		return this._age;
	}
}

let p: Personnes<string, number>;

p = new Personnes<string, number>('Laby Damaro', 24);

console.log("Je m'appelle " + p.nom + " et j'ai " + p.age + ' ans');
