// Function explicite
function somme(a: number, b: number): number {
	return a + b;
}

// Function anonyme

const anonymeSome: (x: number, y?: number) => number = function(a: number, b?: number): number {
	if (b) {
		return a + b;
	} else {
		return a;
	}
};
