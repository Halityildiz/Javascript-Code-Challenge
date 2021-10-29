const myTextInput = document.getElementById("mynumber");
console.log(myTextInput);
const myButton = document.getElementById("submit");
const myResult = document.getElementById("sonuc");



myButton.addEventListener("click", () => {
    let myNumber = myTextInput.value;
    let logic = perfectNumber(parseInt(myNumber));
    if (logic) {
        myResult.innerHTML = `${myNumber} is a perfect number!`;
    } else {
        myResult.innerHTML = `${myNumber} is not a perfect number!`;
    }
})


function perfectNumber(num){
    let toplam = 1;
    if (num == 1) {
        return false;
    }else{
        for (let index = 2; index <= num/2; index++) {
            if (num % index == 0) {
                toplam += index;
            }
        }
        if (num == toplam) {
            return true;
        }
        return false;
    }
}


// function perfectNumber() {
//     let num = parseInt(prompt("enter a number: "))
//     let sum = 1;
//     for (i=2;i<=num/2;i++) {
//         if(num%i==0) {
//             sum += i;
//         }
//     }
//     if (num==sum && num>1) {
//         return `It is a perfect number`
//     } else {
//         return `It is not a perfect number`
//     }
// }

// console.log(perfectNumber());