function fizz() {
    let number = document.getElementById("number").value;
    for( var i=1; i<=number; i++){
        if (i % 15 == 0)
        document.getElementById("result").innerHTML += `${i} FizzBuzz <br>`;
        else if(i % 3 == 0)
        document.getElementById("result").innerHTML += `${i} Fizz <br>`;
        else if(i % 5 == 0)
        document.getElementById("result").innerHTML += `${i} Buzz <br>`;
        // else document.getElementById("result").textHTML += `<br>`;        
    }    
}


// let enteredNumber = document.getElementById("enterNumber");
// let button = document.getElementById("checkNumber");
// let output = document.getElementById("test");

// function fizzBuzz() {
//     let number = parseInt(enteredNumber.value);
//     let result = ""

//     for (let i=1; i<=number; i++) {
//         if ((i%3 == 0) && (i%5 == 0)) {
//             result += `${i} fizz buzz <br>`
//         } else if (i%3 == 0) {
//             result += `${i} fizz <br>`
//         } else if (i%5 == 0) {
//             result += `${i} buzz <br>`
//         } 
//     }
//     output.innerHTML = result
// }

// button.addEventListener("click", fizzBuzz)