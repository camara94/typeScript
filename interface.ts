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

interface Chaines {
	[index: number]: string;
}

let c: Chien;

c = new Chien();

c.deplacer();
c.manger();

let v: Chaines;
v = ['Mawatta', 'Kalil', 'Makoura', 'Mohamed', 'Fatoumata', 'Moussa', 'Laby Damaro'];
console.log(v[0]);
console.log(v[1]);
console.log(v[2]);
