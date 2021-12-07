const fs = require('fs').promises;

// Tentativa de fazer de forma dinâmica o Promise.all;
const createArrayFiles = async () => {
  const stringArray = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const promiseArray = [];
  const fileNames = [];
  for(let i = 0; i < stringArray.length; i++) {
    promiseArray.push(fs.writeFile(`./file${i + 1}.txt`, `${stringArray[i]}`, { flag: 'w'}));
    fileNames.push(`file${i + 1}.txt`);
  }
  // console.log(fileNames);
  await Promise.all(promiseArray);

  const fileContents = await Promise.all(fileNames.map((file) => fs.readFile(file, 'utf8')));
  const joinFileContents = fileContents.join(' ');

  await fs.writeFile('./fileAll.txt', joinFileContents);

}

createArrayFiles();