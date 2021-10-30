let str = 'Lorem ipsum dolor adalet amet consectetur adipisicing elit. Cupiditate numquam, minima soluta beatae a quas aliquam ex distinctio exercitationem illo adalet autem quod vitae. Repellat quasi ab dolorum, doloremque laudantium unde cum doloribus! Officiis delectus nulla error suscipit debitis incidunt. Accusamus aliquid odio inventore adalet nemo ea qui quam neque non? Nisi voluptas alias tempore numquam harum voluptatum ab laborum ea ipsum officia quisquam, maxime fugit animi eaque soluta molestiae, eum adalet ipsam impedit corrupti dolorem odio, cumque labore? Quod odit, sunt a itaque quisquam officiis blanditiis at dolorem, repudiandae dignissimos ipsam voluptatem incidunt. Suscipit adalet sunt optio corrupti eveniet beatae consequatur, impedit laboriosam eos mollitia, exercitationem rerum ipsum? Harum quidem ut, ea error modi nesciunt iste dolorum voluptates voluptate a, sit aut';
const myArr = str.split(" ");
let strAranan = prompt("aranacak kelimeyi giriniz");
let indexAranan = [];
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] === strAranan){
      indexAranan.push(i);    
    }
  }
console.log(indexAranan);


