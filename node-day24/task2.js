function varExample() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log("Inside block:", x); 
    }
    console.log("Outside block:", x);
}

varExample();
