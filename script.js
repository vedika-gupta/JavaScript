// 1. Ways to print in JavaScript
        // console.log("Hello world");
        // alert("me");
        // document.write("this is document write");

        // 2. JavaScript console API
        // console.log("Hello World", 4+6, "Another Log");
        // console.warn("This is warning")
        // console.error("This is error")

// 3. JavaScript Variables

// What are variables? - Containers to store data values

// number
/*
var number1 = 34;
var number2 =56;
console.log(number1 + number2);

// 4. Data Types in JavaScript

//String
var str1 = "This is a string.";
var str2 = 'This is also a string';

//Objects
var marks = {
    vedi: 95,
    amss: 71,
    divy: 10.0
}
console.log(marks);

//Booleans
var a = true;
var b = false;
console.log(a);
console.log(a, b)

// var und = undefined;
var und;
console.log(und);

var n = null;
console.log(n);

// At a very high level, there are two types of data type in JavaScript
// 1. Primitive Data type - undefined, number, boolean, string, null, symbol
// 2. Reference Data type - Arrays and Objects

var arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[3]);

var array = [1,2,"vedi",4,5];
console.log(array[2]);
*/

// Operators in JavaScript

// var a = 34;
// var b = 65;
// console.log("The value of a + b is: ", a+b);
// console.log("The value of a - b is: ", a-b);
// console.log("The value of a * b is: ", a*b);
// console.log("The value of a / b is: ", a/b);

// console.log(b+=4);

// Functions in JavaScript

// function avg(a, b)
// {
//     return (a+b)/2;
// }

// c = avg(3, 6);
// d = avg(23, 69);
// console.log(c);
// console.log(d);
// console.log(c, d);


// Conditionals in JavaScript

// var age = 52;
// if(age < 8)
// {
//     console.log("You are a kid");
// }
// else if(age > 50 )
// {
//     console.log("You are old now");
// }
// else
// {
//     console.log("You are a kid");
// }

// LOOPs in JavaScript

////// for loop ////////

//  var arr = [1,5,6,7,8,9];

//  for(i=0; i<arr.length; i++)
//  {
//     console.log(arr[i]);
//  }

// arr.forEach(function(element){
// console.log(element);
// })

/*

// let and const
let a = 0;
const b = 1;
// b++;   cannot change the value of const
a = b+2;

*/

///////// while loop //////////

// let i = 0;
// while(i<arr.length)
// {
//     console.log(arr[i]);
//     i++;
// }

////////// do while ////////

// let j = 1;
// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length-6);

//  Break and Continue

// let i = 0;
// for(i=0; i<arr.length; i++)
// {
//     if(arr[i] == 8)
//     {
//         break;
//     }
//     console.log(arr[i]);
// }

// let i = 0;
// for(i=0; i<arr.length; i++)
// {
//     if(arr[i] == 8)
//     {
//         continue;
//     }
//     console.log(arr[i]);
// }

/////////// Array Methods /////////

// let myArr = [1, 2, 3, true, null, "hello"];
// console.log(myArr.length);
// // myArr.push("vedi");
// // myArr.pop();
// // myArr.shift();
// // console.log(myArr);

// let newLen = myArr.unshift("vedi");
// console.log(newLen);
// console.log(myArr);
// console.log(myArr.toString());
// let arr = [2, 5, 3, 23, 67, 11, 1, 10453];
// arr.sort();  // sorting is a lil different 
// console.log(arr);

/////////// String Methods /////////////

// let MeraPyaaraString = "Mai bahut acha hu sun lo sab log sab mere pyaare sab";
// console.log(MeraPyaaraString);
// console.log(MeraPyaaraString.length);
// console.log(MeraPyaaraString.indexOf("sab"));
// console.log(MeraPyaaraString.lastIndexOf("sab"));

/////// slicing of strings ////////

// let str = "Vedika is a good girl";
// console.log(str.slice(0, 10));

// // replace

// newstr = str.replace("Vedika", "Riya");
// newstr = newstr.replace("good", "bad");
// console.log(newstr);
// console.log(str);

// Dates in JS

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime()); // time in seconds
// console.log(myDate.getFullYear()); // return current year (2023)
// console.log(myDate.getDay()); // return day in number (Tuesday - 2)
// s - 0
// m - 1
// t - 2
// w - 3
// t - 4
// f - 5
// s - 6
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

/////// DOM Manipulation ///////

let elem = document.getElementById('click');
// console.log(elem);

let elemclass = document.getElementsByClassName('container');
// console.log(elemclass);
// elemclass[0].style.background = "yellow";
// elemclass[0].classList.add("bg-primary");
// elemclass[0].classList.add("test-success");
// elemclass[0].classList.remove("test-success")
// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);

tn = document.getElementsByTagName('div');
// console.log(tn);
CreatedElement = document.createElement('p');
CreatedElement.innerText = "This is a created para.";
tn[0].appendChild(CreatedElement);
CreatedElement2 = document.createElement('b');
CreatedElement2.innerText = "This is a Bold Para.";
tn[0].replaceChild(CreatedElement2, CreatedElement);

// removeChild(element); ---> removes an Element


//////// On console ////////

// -> document.location
// -> document.URL
// -> document.title
// -> document.scripts
// -> document.links
// -> document.images
// -> document.forms
// -> document.domain

// Selecting using query

// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);

// // Events in JavaScript

// function clicked()
// {
//     console.log("Yes, It's clicked");
// }

// window.onload = function(){
//     console.log("The document is loaded.");
// }

// firstContainer.addEventListener("click", function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We clicked the button </b>";
//     console.log('click hua Container pe');
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse over container.");
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container.");
// })


// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;

// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container.");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We clicked the button </b>";
//     console.log("Mouse down when clicked on Container.");
// })

/////// Arrow Functions ////////

// function summ(a, b){
//     return a+b;
// }

// summ = (a, b) =>{
//     return a+b;
// }

////////// SetTimeOut and SetInterval /////////

// logKaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b>Set Interval fired.</b>"
//     console.log("I am your log");
// }
// clr = setTimeout(logKaro, 2000);
// clr = setInterval(logKaro, 2000);
// Use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout


//////////// JavaScript Local Storage ////////////


// localStorage.setItem("name", "Vedika")

// localStorage
// >> Storage {name: 'Vedika', length: 1}

// localStorage.getItem("name")
// >> 'Vedika'

// localStorage.removeItem('name')
// localStorage.clear()

//////// JSON //////////

// obj = {name: "vedika", length: 1, a: {this: 'that'}};
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// console.log(obj);
// console.log(typeof obj);
// parsed = JSON.parse(`{"name":"vedika","length":1,"a":{"this":"that"}}`);
// console.log(parsed);

////////// JavaScript Versions ///////////

// Template Literals - Backticks

// a = 34;
// console.log(`this is the value of a: ${a}`)
