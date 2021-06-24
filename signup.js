var email1 = document.getElementById("exampleInputEmail1");
var pwd1 = document.getElementById("exampleInputPassword1");
var name1 = document.getElementById("exampleInputName");
var phone1 = document.getElementById("exampleInputphone");
var pwd2 = document.getElementById("exampleInputPassword2");

function validate(){

regexp = /^[a-zA-Z0-9\._&]+@[a-z]+.[a-z]{2,3}.[a-z]{2,3}?$/;
regexp1 = /^(?=.*\d)(?=.{8,13})(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*._]).*$/;
regexp2 = /^[^0]\d{9}$/;

if(name1.value==""){
    
}
else{

            if(email1.value==""){
                // error1.innerHTML = "email cannot be empty";
            }
            else{

                if( regexp.test(email1.value)){

                    error1.innerHTML = "email valid";
                    error1.style.color= "green";
                        if(phone1.value=="")
                        {
                            // error2.innerHTML = " enrter password";
                        }

                        else{
                                        if(regexp2.test(phone1.value)){
                                        phone.innerHTML = "phone number correct";
                                        phone.style.color= "green";
                                                if((pwd1.value=="")){

                                                  }
                                                  else{
                                                      if(regexp1.test(pwd1.value)){

                                                        pwd.innerHTML = "password correct";
                                                        pwd.style.color= "green";
                                                        
                                                            if(pwd2.value==""){
                                                                rpwd.innerHTML = " re-enter password ";
                                                                
                                                            }
                                                            else{
                                                                 if(pwd1.value==pwd2.value){
                                                                    rpwd.innerHTML = "  password correct";
                                                                    rpwd.style.color= "green";
                                                                    return true;

                                                                 }
                                                                 else{
                                                                    rpwd.innerHTML = "  password incorrect";
                                                                     return false;

                                                                 }


                                                            }

                                                      }
                                                      else{
                                                        pwd.innerHTML = "password incorrect:Should contain Atleast 1 uppercase , lowercase, number and special character .length 8-13";
                                                        pwd.style.color = "red";
                                                        return false;
                                                      }
                                                  }




                                        
                                        }
                                        else{
                                        phone.innerHTML = "incorrect phone number";
                                        phone.style.color = "red";
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

}