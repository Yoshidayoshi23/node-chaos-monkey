const PrankBase = require("./prank-base");
const sizeOf = require('object-sizeof');
const fs = require('fs');
const util = require('util');
const readFilePromise = util.promisify(fs.readFile);
const path = require('path');

class overloadMemory extends PrankBase {
  constructor(expressApp) {
    super(...arguments);
  }

  start() {
    console.log(`Prank:About to overload CPU`)
    const fileContent = await readFilePromise(path.join(__dirname, './big-text-file.txt'));
    require("crypto").createCipher("aes192", fileContent);
  }

  stop() {
    //
  }
}

module.exports = overloadMemory;