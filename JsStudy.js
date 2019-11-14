const data = [
    {
      id: 1,
      first_name: "Hermine",
      last_name: "Kennefick",
      email: "hkennefick0@vimeo.com",
      gender: "Female",
      age: 91,
      logins: [
        {
          date: "11/26/2018",
          ip: "216.249.31.55"
        },
        {
          date: "3/4/2019",
          ip: "164.130.244.85"
        }
      ]
    },
    {
      id: 2,
      first_name: "Frankie",
      last_name: "Fulun",
      email: "ffulun1@webmd.com",
      gender: "Female",
      age: 96,
      logins: [
        {
          date: "7/15/2018",
          ip: "50.244.86.134"
        },
        {
          date: "9/3/2018",
          ip: "60.175.39.108"
        },
        {
          date: "5/1/2018",
          ip: "48.182.219.202"
        },
        {
          date: "2/25/2019",
          ip: "14.36.6.32"
        }
      ]
    },
    {
      id: 3,
      first_name: "Niccolo",
      last_name: "Blazey",
      email: "nblazey2@pcworld.com",
      gender: "Male",
      age: 21,
      logins: [
        {
          date: "7/31/2018",
          ip: "103.244.63.89"
        }
      ]
    },
    {
      id: 4,
      first_name: "Patin",
      last_name: "Shovelton",
      email: "pshovelton3@cocolog-nifty.com",
      gender: "Male",
      age: 46,
      logins: [
        {
          date: "9/21/2018",
          ip: "78.207.91.210"
        },
        {
          date: "8/14/2018",
          ip: "24.253.130.139"
        },
        {
          date: "7/30/2018",
          ip: "79.241.216.201"
        },
        {
          date: "4/26/2018",
          ip: "162.241.137.168"
        },
        {
          date: "8/10/2018",
          ip: "117.208.238.144"
        }
      ]
    },
    {
      id: 5,
      first_name: "Lorne",
      last_name: "Chorley",
      email: "lchorley4@eepurl.com",
      gender: "Female",
      age: 57,
      logins: [
        {
          date: "10/2/2018",
          ip: "249.123.174.73"
        }
      ]
    }
  ];
  
  const newObj={
    gender: "Female"
}
function search(dat,obj){
    let newobje={}
        Object.keys(obj).forEach(key => {
            newobje = data.filter(item => {
              return item[key] === obj[key]
        })
    })
    return newobje
}
//   console.log(search(data,newObj))

var color;
 
console.log(color);
 
color = "blue";
 
console.log(color);
var obj ={
  x:1
}
// Object.defineProperties(obj,'y',{
//   writable:false
// })
// Object.freeze(obj)
obj['y']=2
// console.log(obj)


 var n= 1221
// function paliderom(num){
// let newArry=Array.from(String(num),Number)
// // let numArray=Array.from
// console.log(newArry)
// var resverse= newArry.reverse();
// console.log(resverse)
// if(resverse == newArry){
//   return true
// } else{return false}
// }
// console.log(paliderom(1221))
// console.log(Math.log(n)/Math.log(10))


function Multi(x){
  // let num = x;
  return function(y){
       return x * y
  }
  
}
(function() {
  var x = y = 200;
})();


 
console.log('y: ', y);
// console.log('x: ', x);
// EXAMPLE OF CALL () AND APPLY ()
let obj1={
  name:'yo',
  getInfo:function(hight,age,color){
     return `I am ${this.name} . my hight is ${hight} 
             and I am ${age} years old , my eye color is ${color}`
         
  }
}
let obj2={
  name:'yoni'
}
console.log(obj1.getInfo(10,60,'yellow'))
console.log(obj1.getInfo.call(obj2,10,18,'blue'))
console.log(obj1.getInfo.apply(obj2,[10,33,'red']))

function total(y){
  const arg = Array.prototype.slice.call(arguments)
  console.log(arg)
}


console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof [])


const user1 = {
  name: 'Jordan',
  age: 28,
};
 
const user2 = {
  name: 'Jordan',
  age: 28,
};
 
console.log(user1 == user2);
console.log(user1 === user2);
//  console.log(total(10)(20))

let User = {
  name:'yo',
   getName(way){
     console.log('her name is ' ,this.name , way)
  }
}

let users={
  name : 'abebae'
}

User.getName.apply(users,['apply'])


var arr1 = [{hi:'ji'}];
var arr2 = new Array(50);
var arr3 = new Array(1, 2, "three", 4, "five");
var arr4 = new Array([1, 2, 3, 4, 5]);
 
console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
console.log('arr3: ', arr3);
console.log('arr4: ', arr4);

console.log([10, 20, 30, 40, 50].indexOf(30));
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' }));
console.log('hello world'.indexOf('o'));
console.log([[1], [2], [3], [4]].indexOf([2]));


console.log(900.9 === (300.3 * 3));
console.log(300.3 * 3);
console.log(Number((300.3 * 3).toFixed(2)));
console.log(Number((300.3 * 3).toPrecision(12)));
console.log(((300.3 * 10) * 3) / 10);

const data1 = 'Jordan Smith';
const data3=1234
const data2 = [].filter.call(data1, function(elem, index) {
  return index > 6;
});
const data4=[].reduce.call(data3.toString(),(acc,ele) => acc + ele)
// only use 'read-only' methods: filter, forEach, map, some, every, etc.
// cannot use: push, pop, splice, shift, reverse, etc.

console.log(data4);


 
//VERY INPORTANT ...........................................
var x = 10;
 
function y() {
    function x() {}
    x = 100;
    return;
    // function x() {}
}
y();
console.log(x);
//.......................................................................
const a = {};
const b = { name: 'b' };
const c = { name: 'c' };
 
a[b] = 200;
// a['[object Object]'] = 200
 
a[c] = 400;
// a['[object Object]'] = 400
 
console.log(a[b]);
// console.log(a['[object Object]']);

//........................................................................................