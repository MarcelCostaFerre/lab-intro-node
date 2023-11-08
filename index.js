class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    if(this.items.length>1){
      this.items.sort(function (a, b) {
      return a - b;
    });
    }
    this.length = this.items.length
  }

  get(pos) {
    if (pos > this.items.length){
      throw new Error("OutOfBounds");
    }
    return this.items[pos]
  }

  max() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items[this.length - 1]
  }

  min() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items[0]
  }

  sum() {
    let suma = 0;
    for(let i = 0; i<this.items.length; i++){
      suma += this.items[i]
    }
    return suma
  }

  avg() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.sum()/this.items.length
  }
}

module.exports = SortedList;
