'use strict';

const fs = require('fs');

let arr = `'use strict'; \n 
let arr = ['JP', 'Chloie', 'JT']; \n 
arr.forEach(element => {
  console.log(element); \n
});`
  .split('');

let writeFile = binaryFile => { 
  return new Promise((resolve, reject) => { 
    fs.writeFile('./files/loop.js', binaryFile, (err) => {
      if (err) reject(err);
    });
  });
};

let newBuffer = (arr) => {
  return new Promise((resolve, reject) => { 
    let data = Buffer.from('');

    arr.forEach(element => {
    data = Buffer.concat([data, Buffer.from(element)]);
      console.log(data);
    });

    resolve(data); 
  });
};

newBuffer(arr)
  .then(data => {
    writeFile(data);
  })
  .catch(console.error);

// let stringifyBuffer = (buffer) =>{
//   let str = '';
//   for (let char of buffer) {
//     str += String.fromCharCode(char);
//   }

//   return str;
// };

// let writeHTMLFile = binaryFile => {
//   return new Promise((resolve, reject) => { 
//     fs.writeFile('./files/index.html', binaryFile, (err) => {
//       if (err) reject(err);
//     });
//   });
// };

// console.log(writeHTMLFile(arr));

let readFile = () => {
  return new Promise((resolve, reject) => { 
    fs.readFile('./files/loop.js', (err, data) => {
      if (err) reject(err); {
        resolve(data)
      };
    });
    console.log(readFile());
  });
};




  

