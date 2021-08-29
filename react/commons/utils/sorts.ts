import  Lead  from './../interfaces/Lead'

export default function sortByName (a: Lead, b: Lead): number {
    let first = a.name.toLowerCase();
    let second = b.name.toLowerCase();
    if (first > second) {
      return 1;
    }
    if (first < second) {
      return -1;
    }
    return 0;
}