export default function getListStudentIds (myList) {
  let FinalList = [];
  if (!(myList instanceof Array)) {
    return FinalList;
  }
  FinalList = myList.map((items) => items.id);
  return FinalList;
}
