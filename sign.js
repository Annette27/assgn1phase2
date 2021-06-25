var email = document.getElementById("exampleInputEmail1");
var pwd = document.getElementById("exampleInputPassword1");

function validate(){

regexp = /^[a-zA-Z0-9\._&]+@[a-z]+.[a-z]{2,3}.[a-z]{2,3}?$/;
regexp1 = /^(?=.*\d)(?=.{8,})(?=.*[a-z])(?=.*[A-Z]).*$/

if(email.value==""){
    // error1.innerHTML = "email cannot be empty";
}
else{


if( regexp.test(email.value)){

    error1.innerHTML = "email valid";
    error1.style.color= "green";
    if(pwd.value==""){
        // error2.innerHTML = " enrter password";
    }

else{
     if(regexp1.test(pwd.value)){
        error2.innerHTML = "password correct";
        error2.style.color= "green";
        return true;
        
     }
     else{
         error2.innerHTML = "password incorrect:Should of minimum length of 8 and contain Atleast 1 uppercase , 1 lowercase and 1 number";
         error2.style.color = "red";;
         error2.style.color = "red";
         return false;
     }
    }

}
else
{
    error1.innerHTML = "email invalid"; 
    return false;
}
}

}