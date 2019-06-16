'use strict';

const testFiles = require('../index.js');

jest.mock('fs');

describe('Created files and all sundry tasks'), () => {

  it('should return an error when given a bad file', () => {
    let file = ['Uhoh, bad file'];

    testFiles.fileFunction(file, (err) => {
      expect(err).toBeDefined();
    });
  });

  it('should return contents when given a good file', () => {
    let file = ['Contents'];

    return FileReader.readFile(file)
      .then(data => expect(data).toBeDefined())
      .catch();
  }); 

  it('should write an index.html file if given good data', () => {
    let file = ['Contents'];

    return FileReader.readFile(file)
      .then(data => expect(data).toBeDefined())
      .catch();
  }); 
};