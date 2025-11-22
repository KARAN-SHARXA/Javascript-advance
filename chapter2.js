function dance() {
  console.log("dance");
}

dance();

function lolo() {
  // func  declaration
  console.log("rakesgh");
}
lolo();

let fnc = function () {
  // expression
  console.log("heheheheheheh");
};

console.log();

// fat arraow fnc

let fnc2 = () => {
  //arraow funtion
  console.log("heeee");
};

fnc2();

function abced(v, c) {
  // parameter
  console.log(v + c);
  console.log();
}
abced(2, 3); // argument

// default parameter

function add(v1 = 0, v2 = 9) {
  console.log(v1, v2);
}
add();

// rest

function rest(...hu) {
  console.log(hu);
}
rest(1, 2, 3, 4, 4, 5);

//return

function return1() {
  return 12;
}

let p = return1();
console.log(p);

// first class function -> treat function same as value

let firstclasee_Function = (val) => {
  val();
};
firstclasee_Function(function () {
  console.log("hey");
});

// high order fnc = function that retuern function or accept functin it its parameter

function bbcd() {
  return function () {
    console.log("hhhhhh");
  };
}

bbcd()();

// pure vs impure func

// func that doesnot change the outside value is call pure function

let a = 12;

function pure() {
  console.log("hhhhhhhh");
}
function impure() {
  a++;
}

// func that change outside value that is call impure function

// closure -> function that return one function and use the variabel of parent function

function clourse() {
  let a = 12;
  return function (v) {
    console.log(a + v);
  };
}

clourse()(3);

//lexical scoping

function abcde() {
  let a = 12;
  console.log(a);

  function abcdef() {
    let b = 13;
    console.log(b);

    function abcdefgh() {
      let c = 14;

      console.log(c);
    }

    abcdefgh();
  }

  abcdef();
}

abcde();

// practice

function getScore(...scores) {
  let total = 0;

  scores.forEach(function (val) {
    total = total + val;
  });

  return total;
}

let t = getScore(10, 20, 30);
console.log(t);






function checkAge(age){
  if(age<18) return "Too young";
  return "Allowed"
}
console.log(checkAge(17));







