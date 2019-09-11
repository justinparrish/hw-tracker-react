import React from 'react';
import './App.css';
const average = (asmntsList) =>
  (asmntsList.length < 1) ? "N/A" :
    asmntsList.reduce((a, b) => a + b.grade, 0) / asmntsList.length

const itemListContainer = (lists) => {
  return (
    <div>
      {/* <h5>{lists.asmntName}</h5> */}
      {lists.asmntName}
      &nbsp;&nbsp;&nbsp;&nbsp;
      {lists.grade}
    </div>
  )
}
let allAssgnmnt = []
const classesList = (classItem) => {
  allAssgnmnt = allAssgnmnt.concat(classItem.classListOfAsmnts)
  return (
    <div>
      <h1>{classItem.className}</h1>
      <h1>{classItem.classListOfAsmnts.map(itemListContainer)}</h1>
      {/* <h1>{classItem.classListOfAsmnts[0].asmntName}</h1> */}
      <h3>Average grade for class &nbsp;{average(classItem.classListOfAsmnts)}</h3>

    </div>
  )
}

class ClassForm extends React.Component {

  state = {
    newAssignment: { asmntName: "", grade: 0 }
  }

  handleInput = (evnt) => {
    let newAssignment = { ...this.state.newAssignment }

    newAssignment[evnt.target.name] = evnt.target.value

    this.setState({ newAssignment })
  }

  HandleSubmit = (evnt) => {
    evnt.preventDefault();
    console.log(this.state)
    this.props.addNewAssignment(this.state.newAssignment)
  }

  render() {
    return (
      <form onSubmit={this.HandleSubmit}>
        <input type="text" placeholder="Assignment Name"
          name="asmntName"
          // value={this.state.newAssignment}
          onChange={this.handleInput} />

        <input type="number" placeholder="Grade"
          name="grade"
          // value={this.state.newGrade}
          onChange={this.handleInput} />
        <input type="submit" value="Add" />
      </form>
    )
  }
}





class App extends React.Component {
  state = {
    classOne: [
      {
        className: "CSE4444",
        classListOfAsmnts: [
          {
            asmntName: "First Assignment",
            grade: 85
          },
          {
            asmntName: "Second Assignment",
            grade: 95
          },
          {
            asmntName: "Third Assignment",
            grade: 100
          }
        ]
      }
      /*,
      {className: "CSE 3.14",
       classListOfAsmnts:   [
          {asmntName:"Week 001",
          grade:95},
          {asmntName:"Week 002",
          grade:60},
          {asmntName:"Week 003",
          grade:20},
          {asmntName:"Week 004",
          grade:88},
          {asmntName:"Week 005",
          grade:99}
          ]
      },
      {className: "Reading",
       classListOfAsmnts:   [
          {asmntName:"A and a",
          grade:100},
          {asmntName:"B and b",
          grade:100},
          {asmntName:"C and c",
          grade:100},
          {asmntName:"D and d",
          grade:100},
          {asmntName:"E and e",
          grade:100}
          ]
      }
      */
    ]
  }
  addAssignment = (newAssignment) => {

    let classes = { ...this.state.classOne[0] }

    classes.classListOfAsmnts.push(newAssignment)

    newAssignment.grade = Number.parseFloat(newAssignment.grade)

    this.setState({ classes })
    // console.log(this.state)
  }
  render() {
    // console.log(this.state)
    return (
      <div>
        <h1 id="mainHeader">Homework Tracker</h1>

        {this.state.classOne.map(classesList)}
        <h3>Average grade for All assignments from All Classes</h3>
        <h3>{average(allAssgnmnt)}</h3>
        <ClassForm
          addNewAssignment={this.addAssignment}
        />


      </div>
    )
  }
}
export default App;
/*
class App extends React.Component {
  state = {
  asmntListContainer : [
    {asmntName:"First Assignment",
    grade:85},
    {asmntName:"Second Assignment",
    grade:95},
    {asmntName:"Third Assignment",
    grade:100}
    ],
  asmntListContainer1 : [
    {asmntName:"Week 001",
    grade:95},
    {asmntName:"Week 002",
    grade:60},
    {asmntName:"Week 003",
    grade:20},
    {asmntName:"Week 004",
    grade:88},
    {asmntName:"Week 005",
    grade:99}
    ],
  asmntListContainer3 :[
    {asmntName:"A and a",
    grade:100},
    {asmntName:"B and b",
    grade:100},
    {asmntName:"C and c",
    grade:100},
    {asmntName:"D and d",
    grade:100},
    {asmntName:"E and e",
    grade:100}
    ]

   }

  render(){
  return (
    <div>
      <h1 id="mainHeader">Homework Tracker</h1>

      {this.state.asmntListContainer.map(classesList)}
      <h3>Average grade for All assignments from All Classes</h3>
      <h3>{average(allAssgnmnt)}</h3>
      <ClassForm />

    </div>
  )
}
}
*/