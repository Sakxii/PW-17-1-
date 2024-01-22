// 4. Variable hoisting in block scope
{
    console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
    
    var varVariable = "I am a var variable";
    let letVariable;
    
    console.log(varVariable); // "I am a var variable"
    console.log(letVariable); // undefined (hoisted but not assigned yet)
    
    letVariable = "I am a let variable";
    console.log(letVariable); // "I am a let variable"
  }
  
 