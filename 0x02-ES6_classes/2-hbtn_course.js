export default class HolbertonCourse{
  constructor(name, length, students) {
    if (typeof(name) !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
    if (typeof(length) !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }
    if (typeof(students) !== 'object') {
      throw new TypeError('Students must be an array');
    } else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(name) {
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(studs) {
    this._students = studs;
  }
}
