const date=new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const printDate=()=>{
    const todayDate=date.getDate();
    console.log("Todays Date: "+ todayDate +"  "+months[date.getMonth()])
}
const printMonth=()=>{
    const month=date.getMonth()
    console.log("Month: "+ months[month])
}
const getBatchInfo=()=>{
    console.log("Plutonium, W3D5, the topic for today is Node.js module system")
}
module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo