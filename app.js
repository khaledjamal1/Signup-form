const form = document.getElementById("form");
const fname = document.getElementById("firstName");
const lname = document.getElementById("lastName");
const password = document.getElementById("password");
const rpass = document.getElementById("repeatP");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    checkinputs()
})

function checkinputs(){
    const fnamevalue = fname.value.trim()
    const lnamevalue = lname.value.trim()
    const passwordvalue = password.value.trim()
    const rpassvalue = fname.value.trim()
    

    if (fnamevalue===""){
        
    }
}
