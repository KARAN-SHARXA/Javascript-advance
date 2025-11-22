let obj = {
  name:"karan",
  age:26,
  kahanaa:"dal chaawal",
};

for(let key in obj){
  
  console.log(key,obj[key]);
  
  
}




Object.keys(obj)


Object.entries(obj);


let role ='HR'
let obj2 = {
  name:"mukhes",
  addresee:{
    city:"mm"
  },
  [role]:"mukesh"   //computed propertise
};

console.log(JSON.stringify(obj2));
console.log(JSON.parse('{"name":"mukhes","addresee":{"city":"mm"}}'));

// deep cloning
let obj3 =JSON.parse(JSON.stringify(obj2));

//optional channing
obj?.addresss?.city