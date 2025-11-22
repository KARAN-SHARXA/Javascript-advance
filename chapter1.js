
function testVar(){
  if(true){
    var x = 1;
  }

  console.log(x); //var is function-scoped
  
}

testVar()



function testLet(){
  if(true){
    let y =2;
    console.log(y);
    
  }
   console.log(y); // block scoped
  
}

testLet()