const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  Num: [],

  getLength() {
    return this.Num.length;
  },
  addLink(value) {
    const Vlalue = value === "undefined" ? "" : value;
    this.Num.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number") {
      this.Num = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    position--;
    if (
      !Number.isInteger(position) ||
      position < 0 ||
      position >= this.getLength()
    ) {
      this.Num = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.Num.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.Num.reverse();
    return this;
  },
  finishChain() {
    const strNum = this.Num.join("~~");
    this.Num = [];
    return strNum;
  },
};

module.exports = {
  chainMaker,
};
