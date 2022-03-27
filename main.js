const election = ["manna", "sanni", "jayed", "jayed", "jayed"];
// for (const i of election) {
//   console.log(election);
// }
// for (let i = 0; i < election.length; i++) {
//   if (election[i] == "jayed") {
//     console.log(i);
//   }
// }

let db = {};
const elc = (item) => {
  const existing = localStorage.getItem("checka");
  if (existing) {
    db = JSON.parse(existing);
  }
  if (item in db) {
    db[item] = db[item] + 1;
  } else {
    db[item] = 1;
  }
  localStorage.setItem("checka", JSON.stringify(db));
};
