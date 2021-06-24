// let myvalue = 111;
// const myconst1 = 13;
// const myconst2 = 5;


// // Aritmethic operators:
// myvalue = myconst1 + myconst2;
// myvalue = 33 + 44;
// myvalue = myconst1 - myconst2;
// myvalue = myconst1 * myconst2;
// myvalue = myconst1 / myconst2;
// myvalue = myconst1 % myconst2;


// console.log({myvalue});
// console.log("myvalue: ", myvalue)


// Assignment Operators:
// var newvalue;
// let a = 7;
// let b = 21;
// newvalue = a += b;
// newvalue = a -= b;
// newvalue = a *= b;
// newvalue = a *= b;
// console.log("a *= b: ", a *= b)
// console.log("a += b: ", a += b)
// console.log("a += b: ", a = a + b)
// console.log("a -= b: ", a -= b)
// console.log("a /= b: ", a /= b)
// console.log("a:", a, "b: ", b, "newvalue: " + newvalue);
// console.log('1' ===  1);
// expected output: false
// comparison operators:
// var x = 5;
// console.log("(x == 8)", (x == 8));
// console.log('(x == "5")', (x == "5"));
// console.log('(x === "5")', (x === "5"));
// console.log('(x != 8)', (x != 8));
// console.log('(x > 8)', (x > 8));
// console.log('(x < 6)', (x < 6));
// console.log('(x >= 4)', (x >= 4));
// console.log('(x <= 9)', (x <= 9));
// var a = 3;
// var b = a--;
// console.log("a: ", a, "b: ", b);
// var qqq = 33;
// var www = --qqq;
// console.log(www);
// console.log(qqq);
// var x = 6, y = 3;
// console.log("x < 10 && y > 1", x < 10 && y > 1);
// console.log("x < 10 && y < 1", x < 10 && y < 1);
// console.log("x == 5 || y == 5", x == 5 || y == 5);
// console.log("x == 6 || y == 0", x == 6 || y == 0);
// console.log("x == 0 || y == 3", x == 0 || y == 3);
// console.log("x == 6 || y == 3", x == 6 || y == 3);
// console.log("!(x === y)", !(x === y));
// console.log("!(x > y)", !(x > y));
// let a = 2;
// let b = "hello";
// console.log((a += 3)); // addition
// // expected output: 5
// console.log((b += " world")); // concatenation
// // expected output: "hello world"
// console.log((a -= "Hello"));
// expected output: NaN
// var x = 5 + 5;
// // expected output: 10
// var y = "5" + 5;
// // expected output: 55
// var z = 5 + "Hello";
// // expected output: Hello5
// console.warn("x: ", x, typeof x);
// console.warn("y: ", y, typeof y);
// console.warn("z: ", z, typeof z);
// let a = 1;
// let b = 0;
// let c = "mmmm";
// a &&= 2;
// console.log(a);
// // expected output: 2
// b &&= 2;
// console.log(b);
// // expected output: 0
// c &&= 555;
// console.log("c: ", c);
// let myobject = {
//     firstname: "sofia",
//     lastname: "c8157",
//     age: 22
// }
// console.log(myobject.firstname);
// The logical OR assignment (x ||= y) operator only assigns if x is falsy.
// const a = { 
//     duration: 0, 
//     title: "mmmm" 
// };
// a.duration ||= 99999999;
// console.log(a.duration);
// // expected output: 50
// a.title ||= "title is empty.";
// console.log(a.title);
// // expected output: "title is empty"
// const a = { duration: 50 };
// console.log(a.speed);
// a.speed ??= 25;
// console.log(a.speed);
// // expected output: 25
// console.log(typeof null);
// // expected output: "string"
// typeof 3.14;
// // expected output: "number"
// typeof NaN;
// // expected output: "number"
// typeof false;
// // expected output: "boolean"
// typeof [1, 2, 3, 4];
// // expected output: "object"
// typeof { name: "John", age: 34 };
// // expected output: "object"
// typeof new Date();
// // expected output: "object"
// typeof function () {};
// // expected output: "function"
// typeof myCar;
// // expected output: "undefined"
// typeof null;
// expected output: "object"
// let value = Math.PI;
// value = Math.round(3.6);
// value = Math.round(3.5);
// value = Math.round(3.4);
// value = Math.ceil(6.1);
// value = Math.ceil(6.6);
// value = Math.floor(6.8);
// value = Math.floor(6.4);
// value = Math.sqrt(25);
// value = Math.abs(-25);
// value = Math.pow(2, 5);
// value = Math.max(2, 5, 66, 5, -8);
// value = Math.min(2, 5, 66, 5, -8);
// value = Math.random();
// value = Math.floor(Math.random() * 100 + 1);
// console.log("value: ", value);
// let person = {
//    firstName: "michael",
//    lastName: "adams",
//    age: 33,
//    langs: ["ada", "fortran", "delphi", "c"],
//    address: {
//        city: "istanbul",
//        postalcode: 34750,
//        livinginaddress: true,
//    },
//    isheworking: function() {
//        console.log("yes, he is working...");
//    },
//    additionalmethod: function() {
//        return 555;
//    }
// }
// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.address);
// console.log(person.address.city);
// console.log(person.address.livinginaddress);
// console.log(person["firstName"]);
// // console.log(person["lastName"]);
// person.isheworking();
// console.log(person.additionalmethod())
// var currentdate = new Date();
// console.error(currentdate);
// console.warn(currentdate.getFullYear());
// console.info(currentdate.getDay());
// console.log(currentdate.getMilliseconds());
// document.getElementById("myfirstheader").style.color = "green";
// console.clear();



//dot and Bracket 

// const variable = "cookie";
// const snack ={
//     cookie:23
// };

// //When we use dot notation, we can call with value
// console.log(snack.cookie);

// //when we use Bracket notation we can call with variable

// console.log(snack[variable]);


// //accessing object properties
// const obj = {
//     name:'value'
// };

// //dot notation
// console.log(obj.name);

// //bracket notation
// console.log(obj['name']);


//Accessing property with variables

const variable = "name";
const obj = {
    name:'value'
};

//with bracket
console.log(obj[variable]);

//with dot
console.log(obj.variable);  //==> undefined

//Never use the Dot Notation when using a Variable
