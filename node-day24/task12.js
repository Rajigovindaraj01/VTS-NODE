function heavyClosure() {
    const largeArray = new Array(1000000).fill("Raji");
    return function() {
        console.log(largeArray[0]);
    };
}

const leaked = heavyClosure();
function attachListener() {
    const element = document.getElementById("myButton");
    const hugeData = new Array(100000).fill("Data");

    element.addEventListener("click", function handler() {
        console.log(hugeData[0]);
    });
}

attachListener();
const functions = [];
for (let i = 0; i < 10000; i++) {
    functions.push(function() {
        console.log(i);
    });
}
