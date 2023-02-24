const people = [
    { name: "DevvSakib", age: 20 },
    { name: "Taulo", age: 15 },
    { name: "Paulo", age: 22 },
    { name: "Kaulo", age: 52 },
    { name: "Yaulo", age: 21 },
]

const sumAge = people.reduce((ac, cur) => ac + cur.age, 0)