//.............Map...............
const map = new Map()
 map.set ('PAK', 'Pakistan')
 map.set ('USA', 'United State of America')
 map.set ('UK', 'United kingdom')
 map.set ('CH', 'China')

 console.log(map); 

 let myDate = new Date()
 console.log(myDate.toString());

 //............ FOR OF LOOP.............
for (const key of map) {
    console.log(key);
}
for (const [key, value] of map) {
    console.log(key, ":-", value);
}

//.............FOR EACH.................
const arr = ["a", "b", "c"]
arr.forEach( function (val, index, array){
    console.log(val, index, array);
})
arr.forEach( (val) => {
    console.log(val);
})
function printMe (val) {
    console.log(val);
}
arr.forEach(printMe)

const myCodding = [
    {
        languageName : "javascript",
        fileName : "js"
    },
    {
        languageName : "java",
        fileName : "j"
    },
    {
        languageName : "python",
        fileName : "py"
    }
]
myCodding.forEach( (val) => {
    console.log(val.fileName);
})

const my_Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const new_Num = my_Num.map( (num) => { 
     
     return num * 10  } )

     console.log(new_Num);


// ............................ call..........&...........this..........................

function setUser (userName){

    this.userName = userName;
    console.log("called");
}

function createUser (userName, email, password){
    
    setUser.call(this, userName)
    
    this.email = email;
    this.password =  password;
}

const user = new createUser("Abdul", "ab@example.com", "123")

console.log(user);

//............CLASSES.........

class User{
      constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
      }
      encryptPassword(){
         return `${this.password}abc`
      }
      changeUsername(){
        return `${this.username.toUpperCase()}`;
     }

}

const userInfo = new User("abdul", "ab@example.com", "12345")

console.log(userInfo.encryptPassword());
console.log(userInfo.changeUsername());

//.......... OBJ property change............

const obj = {
    name: "chai",
    price: 250,
    isAvailable: true,

    function (){
        console.log("code to gya");
    }

}

console.log(Object.getOwnPropertyDescriptor(obj, "name"))


// Object.defineProperty(obj, "name", {
//     writable: false,
//     enumerable: false,
// })
// console.log(Object.getOwnPropertyDescriptor(obj, "name"))


console.log(obj)

for (let [key, value] of Object.entries(obj, "name")) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
   
    
}

//.............class basedGET SET.......

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

 get name(){
    return this._name.toUpperCase();
 }
 set name(value){
    this._name = value;
    console.log("name changed")
 }

 get age(){
    return `${this._age}abc`;
 }

 set age(value){
    this._age = value;
    console.log("age changed")
    
 }
}

const newUser = new User("abdul moeid", "21")

console.log(newUser.name);
console.log(newUser.age);


//...........function based get set............

function user1 (name, age){
    this._name = name;
    this._age = age;

    
    Object.defineProperty(this, 'name', {
        get: function() {
            return this._name.toUpperCase()
            },
        set: function(value) {
                this._name = value;
                console.log("name changed") 
                }
    })

    Object.defineProperty(this, 'age', {
        get: function() {
            return `${this._age}xyz`;
            },
        set: function(value) {
                this._age = value;
                console.log("age changed") 
                }
    })
}

const NewUser = new user1("abc", "21");
console.log(NewUser.name);
console.log(NewUser.age);

//...........object based get set............

const user2 = {
    _name: "abdul",
    _age: "21",
    
    get name(){
        return this._name.toUpperCase()
    },
    set name(value){
        this._name = value;
        },
    get age(){
            return `${this._age}xyz`;
            },
    set age(value){
                this._age = value;
                }
}

const NewUser2 = Object.create(user2)
console.log(NewUser2.name);
console.log(NewUser2.age);

//.............