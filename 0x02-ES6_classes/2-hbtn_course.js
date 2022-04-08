export default class HolbertonCourse{
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(Name) {
    if (typeof(Name) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = Name;
  }

  get length() {
    return this._length;
  }

  set length(Length) {
    if (typeof(Length) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = Length;
  }

  get students() {
    return this._students;
  }

  set students(Students) {
    if (!(Students instanceof Array)) {
      throw new TypeError('Students must be an array');
    }

    for (let item of Students) {
      if (typeof(item) !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
    this._students = Students;
  }
}
