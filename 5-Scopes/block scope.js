// Block Scope
{
    const New2 = "Hello Musavvir"
    console.log(New2);
}

const PI = 3.14159;

if (true) {
    const radius = 5;
    const area = PI * radius * radius;
    console.log("Area inside block:", area);
}
// Area inside block 78.5

if (true) {
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar);
}
// I am a block-scoped variable