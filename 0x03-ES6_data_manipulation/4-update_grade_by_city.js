export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: (newGrades.filter((item) => item.studentId === student.id).shift() || { grade: 'N/A' }).grade,
    }));
}
