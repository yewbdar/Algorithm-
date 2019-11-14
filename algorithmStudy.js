// IMPORATANT ALGORITHM SOLUSTION 
// fibonacci
function fibonacci(n ){
  if(n < 3) {
    return 1
  }else{
     return fibonacci(n-1) + fibonacci(n-2)
  }
}
console.log(fibonacci(5))
///Fibonacci With Memoazation 
function fibonacciWithMemo(n,cach){
   cach = cach || []
   if(cach[n]) return cach[n]
   else{
       if(n < 3) return 1 
       else {cach[n] = fibonacciWithMemo(n-1,cach) + fibonacciWithMemo(n-2,cach) }
   }
   console.log('cachhhhhhh',cach)
     return cach[n]
 }
 console.log(fibonacciWithMemo(12))
function fibMimo(n,cach){
  cach = cach|| {}
     if(cach[n]){
       return cach[n]
     }else{
     if(n<3){
       return 1
     }else{
       cach[n]= fibMimo(n-1,cach) + fibMimo(n-2,cach)
     }
     }
     console.log('cach cach cach cach cach',cach)
     return cach[n]
}

console.log('new Fib Memo',fibMimo(12))


 function createCheckDigit(membershipId) {
   let newArr=membershipId.split('')
    let  getSum = newArr.reduce((acc,curr) => acc + parseInt(curr),0)
  console.log(getSum)
  if(getSum.toString().split('').length > 1){
     createCheckDigit(getSum.toString())
  }
  else{
     return getSum
  }
  
  // Write the code that goes here.
  return 0;
}

console.log(createCheckDigit("55555"));

var foo=function(){
  console.log(foo)
}
foo();

function aaa(){
  return foo
  foo=10
  function bar(){
    var foo='11'
  }
  
}
console.log(typeof aaa())

console.log(String('hello')==='hello')

var x = 0;
function foo() {
    x++;
    this.x = x;
    return foo;
}
var bar = new  foo;
console.log(bar.x);

console.log('hello' instanceof String)

var bar = 1,
    foo = {};

foo: {
    bar: 2;
    baz: ++bar;
};
// 
// console.log(foo.baz + foo.bar + bar)

var myArr = ['foo', 'bar', 'baz'];
// myArr[3];
// console.log(myArr['2']===myArr[2]);

var arr = [];
arr.a  = 'a';
arr.b  = 'b';
arr.foo = 'c';
// console.log(typeof NaN)


function nonUniqueElements(data) {
  let arr=[]
  let obj={}
  for(let i=0;i<data.length;i++){
      if(!obj[data[i]]){
         obj[data[i]] = 1
      }else{
        obj[data[i]] ++
      }
}
arr = data.filter(el => {
  return obj[el] > 1
    
})
return arr;

}
// console.log(nonUniqueElements([1 ,2, 3, 2,1]))



function median(data){
    let newArr=data.sort((a, b) => a - b)
    let mid=Math.floor(newArr.length/2)
    let result
    if(newArr.length % 2 == 0){
      result = (newArr[mid-1] + newArr[mid]) / 2
    }else{
      result = newArr[mid]
    }
    return result
}
// console.log(median([3, 1, 2, 5, 3]))

function primeNum(n){
  let newArr =[]
  let prim=[]
  for(let i=0 ; i<=n ; i++){
   newArr[i]=true
  }
  newArr[0]=false;
  newArr[1]=false

  for(let i=2 ;i<n;i++){
    for(let j=2 ; j*i<=n;j++){
        newArr[j*i]=false
    }
  }
 newArr.forEach((element,index) => {
        if(element){
          prim.push(index)
        }
  });
  return prim


}

var x = function (value) {
  return !!value;
};



var Animal = function (config) {
  this.name = config.name;
  this.type = config.type;
  this.age = config.age;

  this.makeNoise = () => {
    alert(config.sound);
  };
};

var max = Animal({
  name: 'Max',
  type: 'dog',
  age: 2,
  sound: 'Woof!'
});
// max.makeNoise();

var x = [typeof x, typeof y][1];
var a = typeof x;


var x = function (n) {
  return n++ - --n;
};

var one = {
  prop: this,
  func: function () {
    return this;
  }
};
var two = {
  prop: one
};

var a = one.prop;
var b = one.func();
var c = one.func.call(two).prop;
// console.log(typeof 1)

function removeVowels(str) {
  const vowels = ['a','e','i','o','u']
  var newArr = str.split('').map(item =>{
         if(vowels.indexOf(item) == -1) return item 
           
   })
 return newArr.join('')
}
// console.log(removeVowels('Hello, world!'))

function Student(name, age, classes) {
  this.name = name;
  this.age = age;
  this.classes = classes;
}

Student.prototype.addClass = function (x) {
  this['classes'].push(x);
};

Student.prototype.updateAge = function (age) {
  this[age] = age;
};

var sam = new Student('Sam', 15, ['English', 'Math', 'History', 'Science']);
sam.addClass('Art');
sam.updateAge(16);
// console.log(sam)


function addUpFrom1To(n) {
  
  if(n <= 1){
    return n
  }else {
    n += addUpFrom1To(n - 1)
  }
  return n
}
// console.log(addUpFrom1To(3))


function isPrime(n) {
  var primes = [];
  for (var i = 0; i <= n; i++) {
    primes[i] = false;
  }
  
  primes[0] = true;
  primes[1] = true;
  
  for (var i = 2; i <= Math.sqrt(n); i++) {
    for (j = 2; i * j <= n; j++) {
      primes[i * j] = true;
    }
  }
  
  var result = [];
  for (var i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }
  
  
//  newArr.forEach((element,index) => {
//         if(element){
//           prim.push(index)
//         }
//   });
  return primes[n-1]


}
// console.log(isPrime(13))


var Person = function(name,age,salary,savings,status){
  this.name=name;
  this.age=age;
  this.salary=salary;
  this.savings=savings;
  this.status=status
}

var mike = new Person(
   'Mike Smith',
  40,
  50000,
  10000,
  'alive'
);
Person.prototype.birthday=function(){
  return this.age = 41 
}
Person.prototype.pay=function(n){
  console.log('savings',this.savings)
 return this.savings=this.savings + n
}
Person.prototype.fire=function(){
  return this.salary = 0;
}
Person.prototype.kill=function(){
  return this.status = 'dead'
}
// console.log(mike.salary)
// console.log(mike.pay(100)); // mike.savings === 10100

function removeDuplicates(arr) {
  
  var newArry=[]
  for(let i=0 ; i<arr.length;i++){
    if( newArry.indexOf(arr[i]) < 0){
      newArry.push(arr[i])
    }
  }
  // console.log(newArry)
  return newArry
}
removeDuplicates([null,'str',null,'str']); // returns [null,'str']

function longestWord(str) {
  var max=0
  let newArr=str.split(/[\?!.]+/)
  for(var i=0;i<newArr.length;i++){
    var arrStr=newArr[i].split(' ');
    //  console.log(arrStr)
     for(let j=0 ; i<arrStr.length;j++){
          if(arrStr[i].length > max){
            max = arrStr[i].length
          }
     }
  }
  return newArr
}
// console.log(longestWord(('How is it that despite millenia.of research, we still know nothing ? How is it that despite millenia of research')))


function sameKeys(obj1, obj2) {
  var bol=true
  let keya=Object.keys(obj1)
  let keyb=Object.keys(obj2)
  console.log(keya,keyb,keya[0])
   keya.forEach(item => {

    console.log(keyb.indexOf(item))
       if(keyb.indexOf(item) == -1){
           return bol = false  
       } 
   })
    
  
  return bol 
}
var b = { x: 0, y: 2 };
var c = { y: 1, z: 1 };

// console.log(sameKeys(b, c));

function longestPalindrome(str){
  let newArr=str.split('');
  let obj={};
     newArr.forEach(item => {
             if(!obj[item]){
              obj[item]=1;
             }else{
               obj[item]++;
             }
             return obj
     })
    let arr=newArr.filter(item=>{
         if(obj[item] ==1){
           return item
         }
    })
   return arr.join('')
}


var Animal = function (config) {
  this.name = config.name;
  this.type = config.type;
  this.age = config.age;

  this.makeNoise = () => {
    console.log(this.sound);
  };
};

var max = new Animal({
  name: 'Max',
  type: 'dog',
  age: 2,
  sound: 'Woof!'
});


var a = 'str';

function f(a) {
  a = 'hi';

  function g(a) {
    a = 1;
  }
  g(a);

  return a;
}

var b = f(a);



var x = {
  colors: ['red', 'orange', 'yellow', 'cyan', 'blue', 'purple'],
  warmColors: [],
  coolColors: [],
  sortColors: function () {
    var self=this

    this.colors.forEach(function (color, index) {
      self[index < 3 ? 'warmColors' : 'coolColors']
    });
  }
};

// x.sortColors(); // Error
Array.prototype.first=function(){
    return this[0]
}
var x = function (a, b) {
  var c = {};
  [a, b].forEach(function (o) {

    for (var key in o) {
      console.log('key',key)
      c[key] = o[key];
    }
  });
  return c;
};
console.log('hihih',x(1,3));

function maxCommenDidser(a,b){
  var max =0
  var arr=[];
     a>b? max=a: max=b
     for(let i=1; i<max;i++){
       if(a % i == 0 && b%i == 0){
         arr.push(i)
       }
     }
     var maxDiviser=Math.max(...arr)
     return maxDiviser
}

// console.log(maxCommenDidser(5,10))

function getRange(arr,tar){
      let newArr=[]
      let index=[]
      // newArr.push(arr.indexOf(tar));
      // newArr.push(arr.lastIndexOf(tar))
    arr.forEach((el,index)=>{
      if(el == tar){
        newArr.push(index)
      }
    })
     index.push(Math.min(...newArr))
     index.push(Math.max(...newArr))
     return index

      
}
// console.log(getRange([1,3,3,5,7,8,9,9,9,15],9))

function reverseItertive(arr,index){
  console.log(index)
  let newArr=[];
  if(index < 0){
    return newArr
  }else{
    newArr.push(reverseItertive(arr[index],index--))
    
  }
  return newArr;
}
var arrs=[1,3,2,5,4,6]
// console.log(reverseItertive(arrs,arrs.length-1))

function getDiffernt(arr,val){
  var res=false
  arr.forEach(ele => {
    if(ele < val){
      var diff=val - ele
      if(arr.indexOf(diff)!== -1){
        res = true 
      }
    }
  })
  return res
}
console.log(getDiffernt([4, 7, 2 , -3, 2],5))