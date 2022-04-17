export default function getStudentIdsSum(students) {
  const idList = students.map((item) => item.id);
  return idList.reduce((prevId, currId) => prevId + currId);
}
