let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Cyrus', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Jeff', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

// Highest Grade
let highestGrade = grades.reduce((acc, curr) => {
    if (curr.grade > acc) {
      return curr.grade;
    } else {
      return acc;
    }
  }, 0);
  
  console.log("Highest Grade:" + highestGrade); 

  // Lowest Grade
  let lowestGrade = grades.reduce((acc, curr) => {
    if (curr.grade < acc) {
      return curr.grade;
    } else {
      return acc;
    }
  }, grades[0].grade);

  console.log("Lowest Grade:" + lowestGrade); 

  // Highest Boy Grade

  let highestBoyGrade = grades
  .filter((student) => student.sex === 'M')
  .reduce((acc, curr) => {
    if (curr.grade > acc) {
      return curr.grade;
    } else {
      return acc;
    }
  }, 0);

  console.log("Highest Boy Grade:" + highestBoyGrade)

  // Highest Girl Grade
  let highestGirlGrade = grades
  .filter((student) => student.sex === 'F')
  .reduce((acc, curr) => {
    if (curr.grade > acc) {
      return curr.grade;
    } else {
      return acc;
    }
  }, 0);

console.log("Highest Girl Grade:" + highestGirlGrade); 

const divElement = document.createElement("div")
divElement. id = "I can change id "
divElement.className = "active"

const h1Element = document.createElement("h1")
h1Element.innerHTML = "Hello,please work"
h1Element.style= "color:red;"
divElement.appendChild(h1Element)

document.body.appendChild(divElement)


console.log("test")

