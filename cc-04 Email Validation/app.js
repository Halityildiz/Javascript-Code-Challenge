const input = document.querySelector('input');
const button = document.querySelector('button');
const result = document.querySelector('.result');
button.addEventListener('click', () => {
  const email = input.value;
  if (!email.includes('@')) {
    result.textContent = `${email} is invalid`;
    return;
  }

  const extension = email.split('@')[1].split('.')[1];
  if (extension == undefined || extension.length == 0 || extension.length > 3) {
    result.textContent = `${email} is invalid`;
    return;
  }

  result.textContent = `${email} is valid`;
});



   
// let button = document.getElementById("check")
// let email = document.getElementById("e-mail")
// let output = document.getElementById("test")

// function checkEmail() {
//     let result = email.value;
//     let extension = ""
//     extension = result.split(".")[1]
//     if (extension.length==2 || extension.length==3) {
//         output.innerText = `${result} is valid`
//     } else {
//         output.innerText = `${result} is invalid`
//     }
// }

// button.addEventListener("click", checkEmail);