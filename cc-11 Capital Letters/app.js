function submit() {
    let text = document.querySelector("#textField").value;
    console.log(text);
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    console.log(words.join(" "));
    document.querySelector("#result").innerHTML = words.join(" ");
  }




  
// let longText = document.querySelector("#text")
// let button = document.querySelector("#convert")
// let output = document.querySelector("#test")

// function capitalLetters() {
//     let text = longText.value.split(' ')
//     let str = ""
//     for (i=0; i<text.length; i++) {
//         text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
//         str += `${text[i]} `;
//     }
//     output.innerText = str.substring(0, str.length-1); //10th line: last char (" ") should be removed.
// }

// button.addEventListener("click", capitalLetters)