export default function updateStudentGradeByCity(students, city, newGrades) {
  const studByLoc = students.filter((student) => student.location === city);
  const studGrades = [];
  for (const student of studByLoc) {
    for (const item of newGrades) {
      if (student.id === item.studentId) {
        student.grade = item.grade;
      }
    }
    if (!student.grade) {
      student.grade = 'N/A';
    }
    studGrades.push(student);
  }
  return studGrades;
}
