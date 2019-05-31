'use strict';

//TASK 1 & 2 Constant Needs
const fs = require('fs');
const reader = require('readline');

//TASK 1

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

//TASK 2

class CreateArticle {

  constructor() {
    this.buffer = Buffer.from('');
    this.tags = {};
  }

  createTag(tag, buffer) {
    if (! this.tags[tag] ) {
      this.tags[tag] = { 
        open: Buffer.from(`<${tag}>`),
        close: Buffer.from(`</${tag}>`),
      };
    }

    this.buffer = Buffer.concat( [this.buffer, this.tags[tag].open, buffer, this.tags[tag].close]);
  }

  convert(file) {
    let lineReader = reader.createInterface({
      input: fs.createReadStream(file),
    });

    lineReader.on('line', function (line) {
      if (line.match (/^[0-9]\./)) {
        this.createTag('h3', Buffer.from(line));
      }
      else if (line.match(/\./)) {
        line.split('.').forEach(sentence => {
          sentence && this.createTag('li', Buffer.from(sentence));
        });
      }
      else if (line) {
        this.createTag('h2', Buffer.from(line));
      }
    }.bind(this));

    lineReader.on('close', () => {
      fs.writeFile('./files/index.html', this.buffer, (err, data) => {
        console.log('Start live-server, file is there so celebrate');
      });
    });
  }
};

let htmlTags = new CreateArticle();
htmlTags.convert('./files/pair-programming.txt');
