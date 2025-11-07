function rememberName(name) {
    return function greet() {
        console.log(`Hello, ${name}!`);
    };
}

const greetRaji = rememberName("Raji");
greetRaji(); 
greetRaji(); 

const greetRajeshwari = rememberName("Rajeshwari");
greetRajeshwari(); 
