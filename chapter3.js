// create 
let marsk = [10.20,30,59];
console.log(marsk);
console.log(marsk[0]);


//methods
marsk.pop(); // delete last item
console.log(marsk);
marsk.push(3,4,5,6); // add item at last
console.log(marsk);
marsk.shift(); // remove first item
console.log(marsk);
marsk.unshift(1); // add itme at first
console.log(marsk);


marsk.splice(2,1); // remove item from second element
console.log(marsk);

let newarr = marsk.slice(0,3); // create new array 
console.log(newarr);


console.log(marsk);



let arr = [1,2,3,43,5];    // 
console.log(arr.reverse());
console.log(arr.sort(function(a,b){
  return a-b;
},function (a,b){
  return b-a;
}));




// for eaceh

let forEach = [11,62,3,4,25];
forEach.forEach(function(val){
  console.log(val+5);
  
  
})

// create new array according to privious array
let map = [56,33,444,55,77,888,65];
let newmap=map.map(function(val){
  return val + 44;
})


// let filter

let filter = [1,2,3,4,5,6,7,8];
let newfilter = filter.filter(function(val){
  if(val>4) return true;
});


let reduce = [1,2,3,4,5,6];
let nereduce=reduce.reduce(function(acc,val){
  return acc + val;
},0)

let spread = [1,2,3,4,5,]
let spread2 =[...spread]



let fruit =["aple","banana","pana"];



let arr7 =[1,2,3,4,5];
let newarr5 = arr7.map(function(val){
  return val * val;
})
console.log(newarr5);











