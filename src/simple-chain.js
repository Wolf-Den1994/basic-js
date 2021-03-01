const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    value === undefined ? this.result.push('( )') : this.result.push(value);
    return this;
  },
  removeLink(position) {
    position = position - 1;
    if (typeof position !== 'number' || (position ^ 0) !== position || position > this.getLength() || position < 0) {
      this.result = [];
      throw new Error();
    } else {
      this.result.splice(position,1);
    }
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    this.result.forEach((e,i) => {
      i + 1 === this.result.length ? str += `( ${e} )` : str += `( ${e} )~~`;
    })
    this.result = [];
    return str;
  }
};

module.exports = chainMaker;
