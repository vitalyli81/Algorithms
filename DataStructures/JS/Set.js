function CustomSet() {
  this.items = {};
  this.size = 0;
};

CustomSet.prototype.add = function (val) {
  if (!this.has(val)) {
    this.items[val] = val;
    this.size++;
    return true;
  }

  return false;
};

CustomSet.prototype.delete = function (val) {
  if (this.has(val)) {
    delete this.items[val];
    this.size--;
    return true;
  }

  return false;
};

CustomSet.prototype.has = function (val) {
  return val in this.items;
};

CustomSet.prototype.clear = function () {
  this.size = 0;
  this.items = {};
};

CustomSet.prototype.values = function () {
  return Object.values(this.items);
};
