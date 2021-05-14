//1
console.log(hello);                                   
var hello = 'world';                                 
// AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello);                                   
// var hello = 'world';
// Console logs 'undefined'   

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
// var needle
// var needle = 'haystack';
// test();
// function test(){
//     var needle
//     var needle = 'magnet';
//     console.log(needle);
// }
// Console logs 'magnet'

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
// var brendan = 'super cool';
// function print(){ //is never called
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// Console logs 'super cool'

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//    var food;
//    food = 'half-chicken';
//    console.log(food);
//    var food = 'gone';
// }
// Console logs: 'chicken   
//                half-chicken'

//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// AFTER HOISTING BY THE INTERPRETER
// var mean;
// mean();
// console.log(food);
// var mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// Throws a TypeError

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
// var genre;
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     var genre; // exists only in this function
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// Console logs: 'undefined
//                rock
//                r&b
//                disco'

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
// var dojo;
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     var dojo; //Exists only in this function
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// Console logs: 'san jose
//                seattle
//                burbank
//                san jose'

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//Console logs: {Chicago, 65}
// Then a type error because the second call attempts to assign the obejct a value because it fullfills the second if statement