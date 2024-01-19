//lexical scope

function outer() {
    let outerVar = "I am from outer function";
  
    function inner() {
      console.log(outerVar);
    }
  
    inner(); // "I am from outer function" ko print karega
  }
  
  outer();
  
  
  //Example 2
  function closureEx() {
    let outerVar = "I am from outer function";
    function innerFunction() {
      console.log(outerVar);
    }
    return innerFunction;
  }
  
  const closure = closureEx();
  closureEx(); // "I am from outer function" ko print karega

  // Example 3
  function lexicalScope() {
    if (true) {
      let blockVar = "I am from block scope";
      console.log(blockVar);
    }
  
  }
  
  lexicalScope(); // "I am from block scope" ko print karega.