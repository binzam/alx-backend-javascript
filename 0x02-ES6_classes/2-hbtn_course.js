class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'name');
    this._length = this._validateNumber(length, 'length');
    this._students = this._validateArray(students, 'students');
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    this._name = this._validateString(newName, 'name');
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(newLength) {
    this._length = this._validateNumber(newLength, 'length');
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(newStudents) {
    this._students = this._validateArray(newStudents, 'students');
  }

  // Helper method to validate string type
  _validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new Error(`${attribute} must be a string.`);
    }
    return value;
  }

  // Helper method to validate number type
  _validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new Error(`${attribute} must be a number.`);
    }
    return value;
  }

  // Helper method to validate array type
  _validateArray(value, attribute) {
    if (!Array.isArray(value)) {
      throw new Error(`${attribute} must be an array.`);
    }
    return value;
  }
}

export default HolbertonCourse;
