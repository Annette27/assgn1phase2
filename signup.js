var email1 = document.getElementById("exampleInputEmail1");
var name1 = document.getElementById("exampleInputName");
var phone1 = document.getElementById("exampleInputphone");
const pwd2 = document.getElementById("exampleInputPassword2");
const indicator = document.querySelector(".indicator");
const input = document.getElementById("exampleInputPassword1");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector("#text1");
const showBtn = document.querySelector("#showBtn");
let regExpWeak = /[a-z]{1,}/;
let regExpMedium = /\d+/;
let regExpStrong = /[A-Z]{1,}/;

showBtn.style.display = "block";
showBtn.onclick = function(){
  if(input.type == "password"){
    input.type = "text";
    showBtn.textContent = "HIDE";
    showBtn.style.color = "#23ad5c";
  }else{
    input.type = "password";
    showBtn.textContent = "SHOW";
    showBtn.style.color = "#000";
  }
}


function validate(){

regexp = /^[a-zA-Z0-9\._&]+@[a-z]+.[a-z]{2,3}.[a-z]{2,3}?$/;
regexp1 = /^(?=.*\d)(?=.{8,13})(?=.*[a-z])(?=.*[A-Z]).*$/;
// regexp2 = /^[^0]\d{9}$/;
regexp2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

if(name1.value==""){
    
}
else{

            if(email1.value==""){
                error1.innerHTML = "email cannot be empty";
            }
            else{

                if( regexp.test(email1.value)){

                    error1.innerHTML = "email valid";
                    error1.style.color= "green";
                        if(phone1.value=="")
                        {
                            phone.innerHTML = " enrter phone number";
                        }

                        else{
                                        if(regexp2.test(phone1.value)){
                                        phone.innerHTML = "phone number correct";
                                        phone.style.color= "green";
                                        return true;
                                                                                       
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


function trigger(){
                                                          showBtn.style.display = "block";
                                                          showBtn.style.color = "black";
                                                          showBtn.onclick = function(){
                                                          if(input.type == "password"){
                                                          input.type = "text";
                                                          showBtn.textContent = "HIDE";
                                                          showBtn.style.color = "#23ad5c";
                                                          }
                                                          else{
                                                                input.type = "password";
                                                                showBtn.textContent = "SHOW";
                                                                showBtn.style.color = "#ffff";
                                                              }
                                                          }

                                                          if(input.value != ""){
                                                            indicator.style.display = "block";
                                                            indicator.style.display = "flex";
                                                            if(input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
                                                            if(input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
                                                            if(input.value.length >= 8 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
                                                            if(no==1){
                                                              weak.classList.add("active");
                                                              text.style.display = "block";
                                                              text.textContent = "Your password is too week";
                                                              text.classList.add("weak");
                                                              
                                                              
                                                            }
                                                            if(no==2){
                                                              medium.classList.add("active");
                                                              text.textContent = "Your password is medium";
                                                              text.classList.add("medium");
                                                            
                                                              
                                                            }
                                                            else{
                                                              medium.classList.remove("active");
                                                              text.classList.remove("medium");
                                                              
                                                            }
                                                            if(no==3){
                                                              weak.classList.add("active");
                                                              medium.classList.add("active");
                                                              strong.classList.add("active");
                                                              text.textContent = "Your password is strong";
                                                              text.classList.add("strong");
                                                              return true;
                                                              
                                                            }
                                                            else{
                                                              strong.classList.remove("active");
                                                              text.classList.remove("strong");
                                                              
                                                                                                                       
                                                              
                                                            }

                                                        
                                                          
                                                          }else{
                                                            indicator.style.display = "none";
                                                            text.style.display = "none";
                                                            showBtn.style.display = "none";
                                                                                                                   

                                                                  }                                                         
 }
                                               
function trigger1(){ 
  console.log(no);
if(pwd2.value!=""){
  rpwd.innerHTML = " enter password ";
                                                    
  if(input.value==pwd2.value){
    rpwd.innerHTML = " password matched";
    rpwd.style.color= "green";
       if(no!=3){
        rpwd.innerHTML = " password not strong enough";
        rpwd.style.color= "red";
         return false;


       }
       else{
        rpwd.innerHTML = " Good to go";
         return true;
       }
                                                          
  }
  else{
    rpwd.innerHTML = "  password mis-match";
    rpwd.style.color= "red";
    return false;                                                                            
                                                      
  }
                                                    
                                                    
  }
}
                                                    