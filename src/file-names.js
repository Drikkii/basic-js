const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let ReName = [];
  for (let i = 0; i < names.length; i++) {
    let NameNew = names[i];
    let count = 0;
    if (ReName.indexOf(NameNew) !== -1) {
      count++;
      while (ReName.indexOf(`${NameNew}(${count})`) !== -1) {
        count++;
      }
    }
    if (count > 0) NameNew += `(${count})`;
    ReName.push(NameNew);
  }
  return ReName;
}
module.exports = {
  renameFiles,
};
