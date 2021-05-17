// Code your solution here
function findMatching(driversArray,string){
  return driversArray.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(driversArray,string) {
  return driversArray.filter(driver => {
    return driver.slice(0,Math.floor(driver.length/2)) === string
  })
}

function matchName(driversArray,string) {
  return driversArray.filter(({name}) => name === "Bobby")
}