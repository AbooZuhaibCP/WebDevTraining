function validateLogin(){
    console.log(0);

    var emailLogin = document.forms["loginForm"]["emailId"].value;
    var password = document.forms["loginForm"]["password"].value;

    if(emailLogin == ""){
        alert("Fill in the email Id.");
        return false;
    }
    else{
        let regExpEmailId = /^[a-z0-9]+@+[a-z]+\.[a-z]{2,3}$/;
        let resultMail = regExpEmailId.test(emailLogin);
        if(!resultMail){
            alert("Invalid mail id.");
            return false;
        }
    }
    if(password == ""){
        alert("Fill in the password.");
        return false;
    }

    return true;
}