const testScope = () => {
	var a = 2;
	console.log('testScope');

	if (true) {
		let a = 'Autre Valeur';

		console.log(a);
	}

	console.log(a);
};

testScope();

class Person {
	nom: string = '';
	prenom: string = '';
	constructor(nom: string, prenom: string) {
		this.nom = nom;
		this.prenom = prenom;
	}

	getNom() {
		return this.nom;
	}

	getPrenom() {
		return this.prenom;
	}
}

var age: any = 2;
age = '20 ans';

var per = new Person('Camara', 'Mawatta');
