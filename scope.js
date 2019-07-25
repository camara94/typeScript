var testScope = function () {
  var a = 2
  console.log('testScope')
  if (true) {
    var a_1 = 'Autre Valeur'
    console.log(a_1)
  }
  console.log(a)
}
testScope()
var Person = /** @class */ (function () {
  function Person (nom, prenom) {
    this.nom = ''
    this.prenom = ''
    this.nom = nom
    this.prenom = prenom
  }
  Person.prototype.getNom = function () {
    return this.nom
  }
  Person.prototype.getPrenom = function () {
    return this.prenom
  }
  return Person
})()
var per = new Person('Camara', 'Mawatta')

console.log(per.getNom())
