function FormData() {
    var firstName = document.forms["joinForm"]["firstName"].value;
    var middleName = document.forms["joinForm"]["middleName"].value;
    var lastName = document.forms["joinForm"]["lastName"].value;
    var education = document.forms["joinForm"]["education"].value;
    var email = document.forms["joinForm"]["email"].value;
    var address = document.forms["joinForm"]["address"].value;
    var phoneNumber = document.forms["joinForm"]["phoneNumber"].value;
    var gender = document.forms["joinForm"]["gender"].value;
    var numberType = document.forms["joinForm"]["numberType"].value;    
    var date = document.getElementById('datePicker').value;

    var profilePicture = document.forms["joinForm"]["profilePicture"].value;

    document.querySelectorAll('#profilePicture').addEventListener('change' ,function() {
        const reader = new FileReader();

        reader.addEventListener("load" , () => {
            localStorage.setItem("recent-image" , reader.result);
        });
        reader.readAsDataURL(this.files[0])
    });

document.addEventListener("DOMContentLoaded", ()=> {
    const recentImageDataUrl = localStorage.getItem("recent-image");

    if(recentImageDataUrl) {
        document.querySelector("#imgPreview").setAttribute("src" , recentImageDataUrl)
    }
})
    // // get user's uploaded image
    // const imgPath = document.querySelector(profilePicture).files[0];
    // const reader = new FileReader();

    // reader.addEventListener("load", function () {
    // // convert image file to base64 string and save to localStorage
    // localStorage.setItem("image", reader.result);
    // }, false);

    // if (imgPath) {
    // reader.readAsDataURL(imgPath);
    // }

    alert(profilePicture)
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("middleName", middleName);
    localStorage.setItem("lastName", lastName);

    localStorage.setItem("education", education);
    
    localStorage.setItem("address", address);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("email",email)
    localStorage.setItem("gender", gender);
    localStorage.setItem("numberType", numberType);
    localStorage.setItem("birthdaytime",date)




    


    alert(date , selected)  
    alert(`${middleName} ${lastName} ${firstName} ${email} ${education} ${address} ${phoneNumber} ${date} ${gender} ${numberType}`)
    console.log(firstName,lastName,middleName,education)
}
// function getDay() {
    
//     var day = document.getElementById("date").value;
//     console.log(day)
// }
// function handleSubmit() {
//     const firstname=document.getElementById('txt').value;
//     const middlename=document.getElementById('tx').value;
//     const lastname=document.getElementById('txtt').value;
//     const education=document.getElementById('hg').value;
//     const email=document.getElementById('tg').value;
//     const address=document.getElementById('jh').value;
//     const selectoption=document.getElementById('mytext').value;
//     const month=document.getElementById('myTxt').value;
//      const month=document.getElementById('myTxt').value;
   
   
              
           
        
    
//     localStorage.setItem("textvalue",firstname);
//     localStorage.setItem("textvalues",middlename);
//     localStorage.setItem("textvaluess",lastname);
//     localStorage.setItem("textvaluesss",education);
//     localStorage.setItem("textvaluessd",email);
//     localStorage.setItem("textvaluessa",address);
//     localStorage.setItem("ddvalue",selectoption);
//     localStorage.setItem("vsss",month);

//     return false ;
// }