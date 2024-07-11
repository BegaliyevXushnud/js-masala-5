// 1-masala

// let obj = {a: 2, b: 3, c: 4};
// let n = 3;
//
// function solve(obj,n) {
// let bushobject = {};
// const keys = Object.keys(obj);
// for(let key of keys){
//     bushobject[key] = obj[key] * n;
// }
// return bushobject;
// }
//
// let result = solve(obj,n);
// console.log(result)

// 2-masala
// function letter(){
//     let str = "salom dunyo";
//     let count = 0;
//     for(let i=0; i<str.length; i++){
//         if(str[i] === 'a'){
//             count++
//         }
//     }
//     console.log(`${str}:    ${count} a harfi mavjud`)
// }
// letter()






// 3-masala
// const books = [
//     {
//         title: "Halqa",
//         author: "Akrom Malik",
//         read: false
//     },
//     {
//         title: "Dunyoning ishlari",
//         author: "O'tkir Hoshimov",
//         read: true
//     },
//     {
//         title: "Iymon",
//         author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//         read: true
//     },
// ];
// function checkbookread(books){
//     books.forEach((book,index) => {
//         const status = book.read ? "O'qilgan" : "O'qilmagan";
//         const authorandtitle = book.author === "Shayx Muhammad Sodiq Muhammad Yusuf"
//         ?`${book.author} hazratlarining` : `${book.author} ning`;
//         console.log(`${index + 1}. ${authorandtitle} ${book.title} kitobi ${status}`);
//
//     })
// }
// checkbookread(books)





// 4-masala
// const input = ["text", "world", "laptop"];
// function obj(arr) {
//     const count = {};
//     arr.forEach(str => {
//         count[str] = str.length;
//     });
//     return count;
// }
// const result = obj(input);
// console.log(result)






// 5-masala
// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// function zoo(arr) {
//     const res = {};
//     arr.forEach(str => {
//         if(res[str]){
//             res[str]++;
//         }else {
//             res[str] = 1;
//         }
//     });
//     return res;
// }
// const output = zoo(animals);
// console.log(output)


// 6-masala
// const people = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 }
// ];
//
// function ageDifference(people) {
//     if (people.length === 0) return 0;
//     let yosh = people[0].age;
//     let qari = people[0].age;
//     people.forEach(person => {
//         if (person.age < yosh) {
//             youngest = person.age;
//         }
//         if (person.age > qari) {
//             qari = person.age;
//         }
//     });
//     const difference = qari - yosh;
//     return difference;
// }
// const difference = ageDifference(people);
// console.log(`result ${difference}`);


// 7-masala
// const input = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
// function getTruthyFalsy(arr) {
//     const truthy = arr.filter(irem => Boolean(irem));
//     const falsy = arr.filter(irem => !Boolean(irem));
//
//     return { truthy, falsy };
// }
// const output = getTruthyFalsy(input);
// console.log(output);





// 8-masala
// let str = "Men dasturlash kursida o’qiyman";
//  function MinMaxWord(str){
//   let arr = str.split(" ");
//   let minWord = arr[0];
//   let maxWord = arr[0];
// for(let word of arr){
//  if(word.length < minWord.length){
//   minWord = word;
//  }else if(word.length > maxWord.length) {
//   maxWord = word;
//  }
// }
// return { minWord: minWord, maxWord: maxWord };
//  }
//  let result = MinMaxWord(str);
//  console.log(result)