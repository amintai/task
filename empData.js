function getEmployee() {
    var empStatus = document.forms["employee"]["empStatus"].value
    var seekingJob = document.forms["employee"]["seekingJob"].value
    var jobTittle = document.forms["employee"]["jobTittle"].value
    var jobType = document.forms["employee"]["jobType"].value
    var jobSummary = document.forms["employee"]["jobSummary"].value
    var getSkill = document.forms["employee"]["add"].value
    alert(getSkill)
    localStorage.setItem("empStatus", empStatus);
    localStorage.setItem("seekingJob" , seekingJob);
    localStorage.setItem("jobTittle", jobTittle);
    localStorage.setItem("jobType", jobType);
    localStorage.setItem("jobSummary" , jobSummary)
    localStorage.setItem("getSkill",getSkill)


    //alert(`${empStatus} ${seekingJob} ${jobTittle} ${jobType} ${jobSummary}`)
}


// function getSkills(){
//     var select = document.getElementsByName('skill');
//     for(var s of select) {
//         if(s.checked) {
//             document.getElementById('printLi').appendChild = s.value;
//         }
//     }
// }
function getSkills(){
var selectedSkills = []
var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

for (var i = 0; i < checkboxes.length; i++) {
  selectedSkills.push(checkboxes[i].value)
  
  //alert(selectedSkills[i])
}
console.log(selectedSkills)


}

function setList(){

}