Array.prototype.groupBy = function(prop) {
  return this.reduce(function(groups, item) {
    var val = item[prop];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
}

let students = [
  { name: "Jane", module: "4FE", track: "frontEnd" },
  { name: "Jane", module: "3FE", track: "frontEnd" },
  { name: "Jane", module: "3BE", track: "backEnd" },
  { name: "Jane", module: "4FE", track: "frontEnd" },
  { name: "Jane", module: "2BE", track: "backEnd" },
  { name: "Jane", module: "3BE", track: "backEnd" }
];

console.log(students.groupBy('track'))