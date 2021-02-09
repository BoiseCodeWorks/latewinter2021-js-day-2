let companyOne = {
    name: "The best company evar!!11!1!",
    missionStatement: "Teleport all the liquidzzz"
}

let obj = {
    name: "straw",
    color: "red",
    otherName: "liquid teleportation device",
    useage: "drink liquids in an upright positon",
    defiance: "gravity",
    height: {
        value: 100,
        unit: "cm"
    },
    manufacturuer: companyOne
}



let string = `This is a ${obj.name}, also known as ${obj.otherName} it is known as that becuase it allows you to ${obj.useage}, which defies ${obj.defiance}!`

console.log(string)

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

for (let num = 0; num <= 10; num++){
    console.log(num);
}

let number = 1
while (number < 11) {
    console.log(number)
    number++
}

let number1 = 0

do {
    console.log(number1)
    number1++
} while (number1 < 11)


function greet(greeting) {
    console.log(greeting)
}

let fruits = [
    {
        name: "Apple",
        cost: 1
    },
    {
        name: "Orange",
        cost: 2
    },
    {
        name: "Banana",
        cost: 3
    }
]

fruits[0].name
fruits[0]["name"]


// let userChoice = window.prompt("What property do you want to see? name or cost")
// console.log(fruit[0][userChoice]);



greet("hello")


let playing = false
while (playing) {
    let userInput = window.prompt("Pick and action and an option; Actions: (G)o, (L)ook; or q to quit")
    userInput = userInput.split(" ")
    let userAction = userInput[0]
    let userOption = userInput[1]
    
    switch (userAction) {
        case "g":
        case "G":
        case "GO":
        case "Go":
        case "gO":
        case "go":
            move(userOption)
            break;
        case "look":
            console.log("You look around or something");
            break;
        case "q":
            playing = false
            console.log("Thanks for playing our super cool complicated game");
            break
        default:
            console.log("Uh yeah no I dont know what you wanted to do there but it didnt work");
    }
    
}


function move(direction) {
    console.log("You move to the ", direction);
}


fruits.push("taco")


for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    
}

for (let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];
    console.log(fruit.name);
    console.log(fruits[index].name);
}


fruits.forEach(function (fruit) {
    console.log(fruit.name);
})

let cheapFruits = fruits.filter(fruit => fruit.cost <= 2)

let foundIndex = fruits.findIndex(fruit => fruit.name == "Banana")

let foundFruit = fruits.find(fruit => fruit.name == "Apple")



























