// Function Scope
function hii() {
    console.log("Hey Musavvir");
}
hii();


function Function2() {
    if (true) {
        var localVarInBlock = "I am a local variable inside a block";
        console.log(localVarInBlock);
    }

    console.log(localVarInBlock);
}
Function2();
// Outputs:
// "I am a local variable inside a block"
// "I am a local variable inside a block"

function Function1() {
    var localVar = "I am a local variable";
    console.log(localVar);
  }
  
  Function1(); // Outputs: "I am a local variable"