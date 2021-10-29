const tbody = document.querySelector('tbody');
console.log(tbody);

const createPerson = (stNr, firstName, lastName, location, path) => {
  return {
    stNr,
    firstName,
    lastName,
    location,
    path
  };
};

const array = ['C1234 - John Doe, London, Full-Stack', 'C2345 - Jane Doe, London, Data-Science', 'C2346 - Mary Ann, Paris, AWS-Devops', 'C2347 - Adam Smith, Texas, AWS-Devops', 'C2444 - Michael Great, Arizona, Full-Stack', 'C2555 - William Cash, Manchester, Data-Science', 'C2455 - Patrick Jane, Madrid, Full-Stack'];

const people = [];

array.forEach(item => {
  let stNr = item.split(',')[0].split('-')[0].trim();
  let firstName = item.split(',')[0].split('-')[1].trim().split(' ')[0];
  let lastName = item.split(',')[0].split('-')[1].trim().split(' ')[1];
  let location = item.split(',')[1].trim();
  let path = item.split(',')[2].trim();
  people.push(createPerson(stNr, firstName, lastName, location, path));
});

people.forEach(person => {
  tbody.innerHTML += `<tr>
                        <td>${person.stNr}</td>
                        <td>${person.firstName}</td>
                        <td>${person.lastName}</td>
                        <td>${person.location}</td>
                        <td>${person.path}</td>
                      </tr>`;
});

// let headerNumber = document.querySelector(".header-number")
// headerNumber.innerText = "St Nr"
// let headerFirstName = document.querySelector(".header-firstname")
// headerFirstName.innerText = "First Name"
// let headerLastName = document.querySelector(".header-lastname")
// headerLastName.innerText = "Last Name"
// let headerLocation = document.querySelector(".header-location")
// headerLocation.innerText = "Location"
// let headerPath = document.querySelector(".header-path")
// headerPath.innerText = "Path"
// let dataNumber = document.getElementsByClassName("data-number")
// let dataFirstName = document.getElementsByClassName("data-firstname")
// let dataLastName = document.getElementsByClassName("data-lastname")
// let dataLocation = document.getElementsByClassName("data-location")
// let dataPath = document.getElementsByClassName("data-path")


// function studentRegister(arr){
//     function splitArray() {
//         splitted = []
//         for (i=0;i<arr.length;i++) {
//             arr[i] = arr[i].replace(" ", ",")
//             arr[i] = arr[i].replace("-", "")
//             arr[i] = arr[i].replace(",", "")
//             arr[i] = arr[i].replace(",", "")
//             arr[i] = arr[i].replace(",", "")
//             splitted.push(arr[i].split(' '))
//         }
//         console.log(splitted);
//         return splitted;
//     }

//     let result = splitArray();
    
//     for (j=0;j<result.length;j++) {
//         let n = result[j].length;
//         dataNumber[j].innerText = result[j][n-5]
//         dataFirstName[j].innerText = result[j][n-4]
//         dataLastName[j].innerText = result[j][n-3]
//         dataLocation[j].innerText = result[j][n-2]
//         dataPath[j].innerText = result[j][n-1]
//     }
// }


// let sample = ['C1234 - John Doe, London, Full-Stack',
// 'C2345 - Jane Doe, London, Data-Science',
// 'C2346 - Mary Ann, Paris, AWS-Devops',
// 'C2347 - Adam Smith, Texas, AWS-Devops',
// 'C2444 - Michael Great, Arizona, Full-Stack',
// 'C2555 - William Cash, Manchester, Data-Science',
// 'C2455 - Patrick Jane, Madrid, Full-Stack']
// console.log(studentRegister(sample)); 
