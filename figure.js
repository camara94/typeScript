class Figure {
  constructor (a, b) {
    this._a = 0
    this._b = 0
    if (a) this._a = a
    if (b) this._b = b
  }
}
class Cercle extends Figure {
  surface () {
    return 2 * Math.PI * this._a * this._a
  }
  perimetre () {
    return 4 * Math.PI * this._a
  }
}
let c1
c1 = new Cercle(2)
console.log("L'aire du cercle est : " + c1.surface())
