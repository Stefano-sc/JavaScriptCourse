// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "Sono una var con ambito di blocco";
    let functionLet = "Sono un let con ambito di blocco";
    const functionConst = "Sono un const con ambito di blocco";
    }
    show();
    
    console.log(functionVar); // Genera ReferenceError
    console.log(functionLet); // Genera ReferenceError
    console.log(functionConst); // Genera ReferenceError