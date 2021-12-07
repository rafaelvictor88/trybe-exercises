const fs = require('fs').promises;

// Tentativa de fazer de forma dinâmica o Promise.all;
// const stringArray = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
// const createArrayFiles = (stringArray) => {
//   const promiseArray = [];
//   for(let i = 0; i < stringArray.length; i++) {
//     promiseArray.push(`file${i + 1}.txt`);
//   }
//   return promiseArray;
// }

// Promise.all(
//   createArrayFiles(stringArray).forEach((item, i) => (
//     fs.writeFile(`${item[i]}`, stringArray.forEach((sArrayItem, i) => sArrayItem[i]))))
// ).then((data) => console.log(data));

// console.log(createArrayFiles());