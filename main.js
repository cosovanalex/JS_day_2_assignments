//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favoriteFood(){
    for(let i = 0; i < Object.keys(person3).length; i++){
        if(Array.isArray(Object.values(person3)[i])){
            console.log(Object.keys(person3)[i])
            console.log(Object.values(person3)[i])
        }
    }    
}

favoriteFood()


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;

// Use an arrow to create the printInfo method
    this.getInfo = () => console.log(this)


// Create another arrow function for the addAge method that takes a single parameter
  this.increase_age = (increment) => {
// Adding to the age     
    const new_age = age + increment;
    console.log(`New Age: ${new_age}`)
    return new_age
  }  
}

let alex = new Person('Alex', 32)
console.log(alex.getInfo())
console.log(alex.increase_age(1))

let stephanie = new Person('Stephanie', 31)
console.log(stephanie.getInfo())
console.log(stephanie.increase_age(3))




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


// string = 'interplanetarium'
// string = 'bear'
string = 'astrophysicist'
// string = 'borrow'
let len = string.length
const stringLengthPromise = (string) => {
    return new Promise( (resolve,reject) => {
        if(len > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}
stringLengthPromise('string')
.then( (result) => {
    console.log(`Big Word`)
})
.catch( (error) => {
    console.log(`Small Number`)
})