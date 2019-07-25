interface Animal {
	manger(): void;
	deplacer(): void;
}

class Chien implements Animal {
	manger(): void {
		console.log('Je marche sur mes 4 pattes');
	}

	deplacer(): void {
		console.log('Je mange de la viande!');
	}
}

let c: Chien;

c = new Chien();

c.deplacer();
c.manger();
