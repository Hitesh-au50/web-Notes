// console.time("time")
// console.log('hello world');
// console.log(true);
// console.log(34+3);
// console.log([1,2,3,4,5]);
// console.log({hitesh:'name' , marks:'70'})
// console.table({hitesh:'name',marks:'50'})
// console.warn("hyjdtgdgtdry");
// // console.clear();
// console.timeEnd("time")
// console.assert(567<189, 'this is not possible')
// console.assert(57>189, 'this is not possible')
// console.error('this is an error')






// var , let , const


// var Name = "hitesh";
// console.log(Name);
// Name = "hii";
// console.log(Name);
// const marks = 49;  // fixed value 
// console.log(marks);
// // marks = 8;         Not use 
// // console.log(marks);   error


// //block scope
// {
//     let Name = "friends";
//     console.log(Name);
//     Name = "guys";
//     console.log(Name);
// }
// console.log(Name);   // get global value

/*
Most common programing case types

1.) camalCase
2.) kabab-case
3.) snake_case
4.) PascalCase

*/

// let marks = 100;
// console.log('datatype is '+(typeof marks));

// let name = "hitesh";
// console.log('datatype is '+(typeof name));

// let albadi = true;
// console.log('datatype is '+(typeof albadi));

// let nulll = null;
// console.log('datatype is '+(typeof null));

// let und = undefined;
// console.log('datatype is '+(typeof und));

// let arr = [1,2,3,4,5,6]
// console.log('datatype is '+(typeof arr));

// let student = {
//     Name : 'hitesh',
//     marks : 99 , 
//     hobby : 'sleep'
// }
// console.log('datatype is '+(typeof student));

// function allam() {

// }
// console.log('datatype is '+(typeof allam));

// let date = new Date();
// console.log('datatype is '+(typeof date));







// function calcSum() {
//     let box1 = document.getElementById("num1").value;
//     let box2 = document.getElementById("num2").value;
//     let sum = Number(box1) + Number(box2);
//     //   document.getElementById("Ans").value = sum;
//     console.log(sum);
//     document.getElementById("answer").innerHTML = sum;
//   }
//   function clear1() {
//     t = 0;
//     document.getElementById("num1").value = "";
//     document.getElementById("num2").value = "";
//     document.getElementById("answer").innerHTML = t;
//   }

// let myvar 
// myvar = 34;
// console.log(myvar , (typeof myvar));

// var bool = true;
// console.log(bool , (typeof bool));


// let date  = String(new Date());
// console.log(date , (typeof date));

// let number = parseFloat(`8786.6785`);
// console.log(number.toFixed(8) , (typeof number))


// const name  = "hitesh" ;
// const greet = "good morning";

// console.log(greet + ' ' + name);


// let  guys = "<h1>my name is hitesh</h1>"+
//     "<p>this is my para graph</p>"

//     guys = guys.concat('byy guys ' , 'good night')
//     console.log(guys);

//     console.log(guys.length);
//     console.log(guys.toLowerCase())
//     console.log(guys.toUpperCase())
//     console.log(guys);
//     console.log(guys[4])
//     console.log(guys.indexOf('my'))
//     console.log(guys.indexOf("ncisdhfw"))
//     console.log(guys.lastIndexOf("my"))
//     console.log(guys.charAt("5"))
//     console.log(guys.endsWith("jbdcisjd"))
//     console.log(guys.includes("is"))
//     console.log(guys.substring(0,7))
//     console.log(guys.slice(-5))
//     console.log(guys.slice(0,5))
//     console.log(guys.split(" "))
//     console.log(guys.replace('this', 'is'))


//     let fruit = 'orange';
//     let fruit2 = 'mango';

//     let myguys = `hello guys my name is ${name} 
//                 <h1>New Heading</h1>
//                 <p>I love ${fruit} and ${fruit2}</p>`;
//                 console.log(myguys);
//   document.body.innerHTML = myguys               


// let a = window;
// let a = document.all;
// a = prompt('This will distroy  ur computer guys');
// console.log(a)



// const cart = ["shoes", "pants", "t-shirt"]

// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId, function (paymentinfo) {
//         showOrderSummary(paymentinfo, function () {
//             updateWalletBalance()

//         });
//     });
// });

// createOrder(cart).then(function (orderId) {
//     return proceedToPayment(orderId);
// })
// .then(function (paymentinfo) {
//     return showOrderSummary(paymentinfo);

// })
// .then(function (paymentinfo) {
//    return updateWalletBalance(paymentinfo);

// })

// promise.then(function (orderId) {
//     proceedToPayment(orderId);

// })







// fetch('https://api.chucknorris.io/jokes/categories')
// .then((response) =>{
//     return response.json();
// })
// .then((data) =>{
//     // console.log(data)
//     var joke = data[0];
//     console.log('Joke:', joke)
// })

// .catch();

// const API = "https://api.chucknorris.io/jokes/categories"

// const user = fetch(API);

// promise is an object that represent eventual completion of async operation.


// promise are handle to async operation in javascript.



// let cont = document.querySelector('.no')
// cont = document.querySelector('.container')
// console.log(cont.childNodes);
// console.log(cont.children);
// let nodeName = cont.childNodes[0].nodeName;
// let nodeType = cont.childNodes[0].nodeType;
// console.log(nodeName)
// console.log(nodeType)

// 1.) Element
// 2.) Attributes
// 3.) Text Node
// 8.) Comment
// 9.) Document
// 10.) docType

// let container = document.querySelector('div.container')
// console.log(container.children[1].children[0].children)
// console.log(container.firstChild)
// console.log(container.firstElementChild.parentNode)
// console.log(container.firstElementChild.nextElementSibling)
// console.log(container.firstElementChild.nextSibling)
// console.log(container.lastChild)
// console.log(container.lastElementChild)
// console.log(container.childElementCount)




// let element = document.createElement("li");
// let text = document.createTextNode("i am hitesh")
// element.appendChild(text)
// console.log(element)

// element.className = 'childul'
// element.id = 'createdLi'
// element.setAttribute('title', 'mytitle')
// element.innerText = 'created by hitesh'
// element.innerHTML = '<b>created by hitesh</b>'

// let ul = document.querySelector('ul.this')
// ul.appendChild(element)
// console.log(ul)


// let ele2 = document.createElement('h3')
// ele2.id = 'ele2'
// ele2.className = 'ele2'
// let tnode = document.createTextNode('this is node ele2')
// ele2.appendChild(tnode)
// element.replaceWith(ele2)


// let myul = document.getElementById('myul')
// myul.replaceChild(element ,document.getElementById('fui'))

// myul.removeChild(document.getElementById('lui'))

// let pr = ele2.getAttribute('id')
// let lpr = ele2.hasAttribute('id')
// console.log(pr)
// console.log(lpr)



// document.getElementById('heading').addEventListener(
//     "click", function(e){
//         let vari;
//         vari  = e.target
//         vari = e.target.className
//         vari = e.target.classList
//         vari = e.target.id
//         vari = Array.from(e.target.classList)
//         vari = e.offsetY
//         vari = e.offsetX
//         vari = e.clientX
//         vari = e.clientY
//         console.log(vari)
//         console.log("you have click the heading")
//     })



// let btn = document.getElementById('btn');

// btn.addEventListener('click' , fun1);
// btn.addEventListener('mousedown' , fun3);
// btn.addEventListener('dblclick' , fun2);

// function fun1(e){
//     console.log('thankx' , e)
//     e.preventDefault()
// }

// function fun2(e){
//     console.log('thankx for dblclick' ,e)
//     e.preventDefault();
// }
// function fun3(e){
//     console.log('thankx for mouse down' ,e)
//     e.preventDefault();
// }

// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log("you enter")
// })
// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log("you leave")
// })
// document.querySelector('.container').addEventListener('mousemove',function(e){
//     console.log(e.offsetX,e.offsetY);
//     document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},54)`;
//     console.log("you leave")
// })


// localStorage


// using create local storage
// localStorage.setItem('name', 'hitesh');
// localStorage.setItem('name2', 'akash');


// get item in local storage
// let name = localStorage.getItem('name')
// console.log(name)


// clear localStorage

// localStorage.clear()

//clear a particular key-value pair

// localStorage.removeItem('name')


//how to add array in local storage

// let imparr = ['name', 'hsdsd', 'cisodjf']
// localStorage.setItem('buys', JSON.stringify(imparr))
// let buys = JSON.parse(localStorage.getItem('buys'))
// console.log(buys)


// how to create session storage
// sessionStorage.setItem('sessionname', 'hitesh');
// sessionStorage.setItem('sessionname2', 'akash');


// let x = 4;
// let y = 5;
// let z;

// z = x+y;
// z = x*y;
// z = x-y;
// z = x/y;

//Exploring the Math object

// z=Math;
// z = Math.E;
// z = Math.PI;
// z = Math.LN10;
// z = Math.LN2;
// z = Math.LOG10E;
// z = Math.ceil(8.8)
// z = Math.floor(8.8)
// z = Math.round(8.8)
// z = Math.sqrt(64)
// z = Math.abs(-76)
// z = Math.pow(2,5)
// z = Math.min(4,5,64,6,434,5,6456,65,43,6)
// z = Math.max(4,5,64,6,434,5,6456,65,43,6)
// z = Math.random(); // get always diff. value
// z = 40+(100-40)*Math.random(); // set range
// console.log(z)


// Date and Time

// let today = new Date()
// console.log(today) // typeOf date is object.

// let otherdate = new Date('6-30-2023 12:00:00')
// console.log(otherdate)

// let a;

// a = otherdate.getDay()
// a = otherdate.getDate()
// a = otherdate.getMinutes()
// a = otherdate.getSeconds()
// a = otherdate.getHours()
// a = otherdate.getFullYear()
// a = otherdate.getTime()
// a = otherdate.getMilliseconds()
// a = otherdate.getTimezoneOffset()
// console.log(a)

// otherdate.setDate(5)
// otherdate.setMonth(8)
// otherdate.setFullYear(2023)
// otherdate.setMinutes(48)
// otherdate.setHours(05)
// otherdate.setSeconds(55)
// console.log(otherdate)



// creating Object

// let car = {
//     name : 'kia',
//     topSpeed : 360,
//     run : function(){
//         console.log('Car is running');
//     }
// }

// function GeneralCar(givenName , givenSpeed){
//     this.name = givenName;
//     this.topSpeed = givenSpeed;
//     this.run = function(){
//         console.log('${this.name} is running')
//     }
//     this.analyze = function(){
//         console.log(`This car is slowed by ${400 - this.topSpeed} km/H than marcedies`)
//     }
// }

// car1 = new GeneralCar('mustang' , '260')
// car2 = new GeneralCar('shift' , '240')
// car3 = new GeneralCar('marcedies' , '300')
// console.log(car1,car2,car3)




// fetch("https://api.chucknorris.io/jokes/random")
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch();