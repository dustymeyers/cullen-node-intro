// module.exports
// means "Here's the data I want to share"
//
// So... `students` will be the return value of require(./cullenites.js)
// could have variables added to each thing, could just stick it into module.exports
module.exports = {
  students: ['Michael', 'Dusty', 'George', 'Vada'],
  instructor: 'Edan',
  addStudent: function (name) {
    this.students.push(name);
  },
};
// we could take the students and addStudent out of the object and it would still work the same way
