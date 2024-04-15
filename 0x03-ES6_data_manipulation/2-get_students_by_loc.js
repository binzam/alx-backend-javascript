export default function getStudentsByLocation(students, location) {
  if (Array.isArray(students)) {
    return students.filter((student) => student.location === location);
  }
  return [];
}
