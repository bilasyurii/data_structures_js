export default class Dictionary {
  constructor(capacity = 10) {
    this._count = 0;
    this._capacity = capacity;
    this._buckets = [];
    this._entries = [];
  }

  /**
   * Hash function, that transforms strings into numbers;
   * 
   * @param {string} str
   * 
   * @returns {number}
   */
  static hash(str) {
    const count = str.length;
    const prime = 41;

    let result = 0;

    for (let i = 0; i < count; ++i) {
      result = (result << 5) - result + str.charCodeAt(i);
    }

    return result & 0x7fffffff;
  }
}

class DictionaryEntry {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}
