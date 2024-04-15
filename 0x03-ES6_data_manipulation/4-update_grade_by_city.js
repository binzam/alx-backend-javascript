export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students)) {
    return students
      .filter((student) => student.location === city)
      .map((student) => {
        const matchingGrade = newGrades.find(
          (grade) => grade.studentId === student.id,
        );
        const grade = matchingGrade ? matchingGrade.grade : 'N/A';

        return { ...student, grade };
      });
  }
  return [];
}
