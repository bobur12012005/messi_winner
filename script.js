let group = [
    {
        name: "Bruno",
        age: 18,
        isMarried: false
    },
    {
        name: "Anna",
        age: 20,
        isMarried: true
    },
    {
        name: "Suzan",
        age: 17,
        isMarried: false
    },
    {
        name: "Jonathan",
        age: 15,
        isMarried: false
    },
    {
        name: "William",
        age: 22,
        isMarried: true
    },
    {
        name: "Miles",
        age: 16,
        isMarried: false
    },
    {
        name: "Alex",
        age: 19,
        isMarried: true
    }
]

let single = []
let double = []
let average_age = 0

group.forEach((member) => {
    average_age += (member.age / group.length)

    if (member.isMarried) {
        double.push(member.name)
    } else {
        single.push(member.name)
    }
})

console.log('The average age of the group is:', Math.round(average_age))
console.log('Single members are:', (single))
console.log('Double members are:', (double))