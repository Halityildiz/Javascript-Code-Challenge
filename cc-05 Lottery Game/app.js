const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
  const generateNumber = () => {
    return Math.floor(Math.random() * 49 + 1);
  };

  let set = new Set();
  while (set.size !== 6) {
    set.add(generateNumber());
  }

  const sortedArray = [...set].sort((a, b) => a - b);

  ul.innerHTML += `<li>${sortedArray}</li>`;
});



  
// let output = document.querySelector("#numbers")

// function lotteryGame() {
//     generateNumber = () => Math.floor(Math.random()*49)+1
//     let number = generateNumber();
//     let arr = []

//     while(true) {
//         if(!arr.includes(number)) {
//             arr.push(number)
//         }
//         if(arr.length==6) {
//             break;
//         }
//         number = generateNumber();
//     }
    
//     arr.sort((a,b) => a-b);
    
//     output.innerHTML = `Lucky numbers are: { ${arr} }`;
// }

// window.addEventListener("load", lotteryGame())