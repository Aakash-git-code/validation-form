document.querySelector(".formSubmit").addEventListener("click", (e) => {
e.preventDefault();
const username=document.getElementById("username").value;
const phone=document.getElementById("phone").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const ConfirmPassword=document.getElementById("ConfirmPassword").value;

const usernameRegex=/^[A-Za-z0-9 ]{4,20}$/;
const phoneRegex=/^(\+\d{1,3}[- ]?)?\d{10}$/;
const emailRegex=/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
const passwordRegex=/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/;

//clear previous error
document.querySelectorAll(".error")
.forEach((curElem)=>(curElem.textContent=""));

let isvalid=true;

//validate username
if(!usernameRegex.test(username)){
    document.getElementById("usernameError").textContent="username is not valid";
    isvalid=false;
}
if(!phoneRegex.test(phone)){
    document.getElementById("phoneError").textContent="phone no. is not valid";
    isvalid=false;
}
if(!emailRegex.test(email)){
    document.getElementById("emailError").textContent="email is not valid";
    isvalid=false;
}
if(!passwordRegex.test(password)){
    document.getElementById("passwordError").textContent="password is not valid";
    isvalid=false;
}

if(!ConfirmPassword=== password){
    document.getElementById("confirmpasswordError").textContent="password is not same";
    isvalid=false;
}

let userData=[];
if(isvalid){
    let formClass=document.getElementsByClassName("form-control");
    Array.form(formClass).forEach((curElem)=>userData.push(curElem.value=""));
    Array.form(formClass).forEach((curElem)=>(curElem.value=""));
    console.log(userData);
    alert("registration successful");
}


});

