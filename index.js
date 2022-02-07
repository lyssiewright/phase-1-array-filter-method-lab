// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driverNames,input){
    let matchNames = driverNames.filter(element => element.toUpperCase() === input.toUpperCase())
    return matchNames;
    }

console.log(findMatching(drivers, 'Bobby'))


function fuzzyMatch(driverNames,input){
    let matchNames = driverNames.filter(element => element.startsWith(input) === true)
    return matchNames;
    }

console.log(fuzzyMatch(drivers, 'Sa'))

const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];




  function matchName(driverNames,input){
    let matchingName = driverNames.filter(element => element.name === input)
    return matchingName;
    }
  
  console.log(matchName(drivers2,'Bobby'))