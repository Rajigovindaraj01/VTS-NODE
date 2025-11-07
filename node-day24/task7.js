function outerFunction() {
    let outerVar = "I am from outer function";

    function middleFunction() {
        let middleVar = "I am from middle function";

        function innerFunction() {
            let innerVar = "I am from inner function";
            console.log(outerVar);   // accessible from outerFunction
            console.log(middleVar);  // accessible from middleFunction
            console.log(innerVar);   // accessible from innerFunction
        }

        innerFunction();
    }

    middleFunction();
}

outerFunction();
