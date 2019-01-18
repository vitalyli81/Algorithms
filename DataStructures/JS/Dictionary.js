function Dictionary() {
  this.table = {};
  this.size = 0;
};

Dictionary.prototype.toStrFn = function (item) {
  if (typeof item === null) {
    return 'NULL';
  }
  if (typeof item === undefined) {
    return 'UNDEFINED';
  }
  if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }

  return item.toString();
};

Dictionary.prototype.hasKey = function (key) {
  return this.toStrFn(key) in this.table;
};

Dictionary.prototype.set = function (key, value) {
  if (key !== null && value !== null) {
    const tableKey = this.toStrFn(key);
    this.table[tableKey] = new ValuePair(key, value);
    this.size++;
    return true;
  }

  return false;
};

Dictionary.prototype.remove = function (key) {
  if (this.hasKey(key)) {
    delete this.table[this.toStrFn(key)];
    this.size--;
    return true;
  }

  return false;
};

Dictionary.prototype.get = function (key) {
  if (this.hasKey(key)) {
    return this.table[this.toStrFn(key)];
  }

  return undefined;
};

Dictionary.prototype.keyValues = function () {
  return Object.values(this.table);
};

Dictionary.prototype.keys = function () {
  return this.keyValues().map(valuePair => valuePair.key);
};

Dictionary.prototype.forEach = function (callback) {
  const keyValues = this.keyValues();

  for (let i = 0; i < keyValues.length; i++) {
    const result = callback(keyValues[i].key, keyValues[i].value);
  }
};

Dictionary.prototype.size = function () {
  return this.size;
};

Dictionary.prototype.clear = function () {
  this.size = 0;
  this.table = {};
}

function ValuePair(key, value) {
  this.key = key;
  this.value = value;
};

ValuePair.prototype.toStr = function () {
  return `[#${this.key}: ${this.value}]`;
};
