abstract class Figure {
	protected _a: number = 0;
	protected _b: number = 0;

	constructor(a?: number, b?: number) {
		if (a) this._a = a;
		if (b) this._b = b;
	}

	abstract surface(): number;
	abstract perimetre(): number;
}

class Cercle extends Figure {
	surface(): number {
		return 2 * Math.PI * this._a * this._a;
	}
	perimetre(): number {
		return 4 * Math.PI * this._a;
	}
}

let c1: Cercle;

c1 = new Cercle(2);
console.log("L'aire du cercle est : " + c1.surface());
