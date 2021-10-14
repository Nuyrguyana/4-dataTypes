
let name = 'Yana'
console.log(Number(name), Boolean(name), String(name))

let age = 28
console.log(Number(age), Boolean(age), String(age))

let isProgrammer = true
console.log(Number(isProgrammer), Boolean(isProgrammer), String(isProgrammer))

let favoriteDrink = null
console.log(Number(favoriteDrink), Boolean(favoriteDrink), String(favoriteDrink))

let address
console.log(Number(address), Boolean(address), String(address))

let card = {
    name: 'Yana',
    age: 28,
    isProgrammer: true
}
console.log(Number(card), Boolean(card), String(card))

let id = Symbol('id')
console.log(Boolean(Symbol('id')), String(Symbol('id')))

let bigIntNumber = 110n
console.log(Number(bigIntNumber), Boolean(bigIntNumber), String(bigIntNumber))



console.log(String(console.log), Number(console.log), Boolean(console.log))
console.log(String({name: 'Maxim'}), Number({name: 'Maxim'}), Boolean({name: 'Maxim'}))
//console.log(String(Symbol('key')), Number(Symbol('key')), Boolean(Symbol('key')))
console.log(String(Number), Number(Number), Boolean(Number))
console.log(String(''), Number(''), Boolean(''))
console.log(String(0), Number(0), Boolean(0))
console.log(String(-10), Number(-10), Boolean(-10))
console.log(String('-105'), Number('-105'), Boolean('-105'))

console.log(Boolean(undefined))