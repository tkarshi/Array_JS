let Students = [
  {
    id: 1,
    name: "Stu1",
    mobile: [12345, 67890],
  },
  {
    id: 2,
    name: "Stu2",
    mobile: [67890, 12345, 878767],
  },
];

// for (i = 0; i < Students.length; i++) {
//   let students = Students[i];
//   console.log(students);
// }

for (let student of Students) {
  console.log(
    `Student Name: ${student.name}, Number of Mobile No: ${student.mobile.length}`
  );
}
