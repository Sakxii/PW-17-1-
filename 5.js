 // 5. Temporal Dead Zone
 {
    console.log(blockScopedVariable); // ReferenceError: Cannot access 'blockScopedVariable' before initialization
    let blockScopedVariable = "I am a block-scoped variable";
    console.log(blockScopedVariable); // "I am a block-scoped variable"
  }
  