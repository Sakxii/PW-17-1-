// 3. Variable hoisting inside a function
function demonstrateVariableHoisting(num1, num2) {
    console.log(result); // undefined (hoisted but not assigned yet)
    
    var result = num1 + num2;
    
    console.log(result); // the actual sum
  }
  
  demonstrateVariableHoisting(8, 12);
  
  