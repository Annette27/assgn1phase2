var email1 = document.getElementById("exampleInputEmail1");
var name1 = document.getElementById("exampleInputName");
var phone1 = document.getElementById("exampleInputphone");
var pwd = document.getElementById("pwd");
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
let regExpName = /^([a-zA-Z',.-]{3,10}( [a-zA-Z',.-]+)*){1,30}$/;

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
regexp2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

if(name1.value==""){
  document.getElementById("Name").innerHTML = " * Field cannot be empty";
  document.getElementById("fName").style.color= "white";  
                 }
else{
  if(regExpName.test(name1.value)){
    document.getElementById("Name").innerHTML = "";
     document.getElementById("fName").style.color= "green";

            if(email1.value==""){
                error1.innerHTML = " * Field cannot be empty";
                document.getElementById("eadd").style.color= "white";
                
            }
            else{ 

                if( regexp.test(email1.value)){
                    error1.innerHTML = "";
                    document.getElementById("eadd").style.color= "green";
                        if(phone1.value=="")
                        {
                            phone.innerHTML = " * Field cannot be empty";
                            document.getElementById("pNum").style.color= "white";
                        }

                        else{
                                        if(regexp2.test(phone1.value)){
                                        phone.innerHTML = "";
                                        // phone.style.color= "green";
                                        document.getElementById("pNum").style.color= "green";
                                        return true;
                                                                                       
                                        }
                                        else{
                                        phone.innerHTML = " * incorrect format";
                                        phone.style.color = "red";
                                        document.getElementById("pNum").style.color= "red";
                                        return false;
                                        }
                           }

                    }
                else
                {
                    error1.innerHTML = " * email invalid"; 
                    return false;
                }



            }
          }
else{
  document.getElementById("Name").innerHTML = " * Name invalid"; 
  document.getElementById("fName").style.color= "red";
  return false;

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
                                                              text.textContent = " * Your password is too week";
                                                              text.classList.add("weak");
                                                              
                                                              
                                                            }
                                                            if(no==2){
                                                              medium.classList.add("active");
                                                              text.textContent = " * Your password is medium";
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
                                                              text.textContent = " * Your password is strong";
                                                              document.getElementById("pLabel1").style.color= "green";
                                                              text.classList.add("strong");
                                                              return true;
                                                              
                                                            }
                                                            else{
                                                              strong.classList.remove("active");
                                                              text.classList.remove("strong");
                                                              
                                                            }
                                                                                                                 
                                                          }
                                                          else{
                                                            pwd.innerHTML = " * Field cannot be empty";
                                                            indicator.style.display = "none";
                                                            text.style.display = "none";
                                                            showBtn.style.display = "none";
                                                           }                                                         
 }
                                               


function trigger1(){ 
 
 if(pwd2.value==""){
  rpwd.innerHTML = " * Field cannot be empty";
  document.getElementById("pLabel2").style.color= "white";
  rpwd.style.color= "white";
 }                                             
 else{
       if(no!=3){
        rpwd.innerHTML = " * password not strong enough";
        rpwd.style.color= "red";
        
        return false;
        }

         else{
          document.getElementById("pLabel1").style.color= "green";
         if (input.value==pwd2.value){
          rpwd.innerHTML = " * password matched";
          rpwd.style.color= "green";
          document.getElementById("pLabel2").style.color= "green";
          return true;

       }

       else{
        rpwd.innerHTML = " * password mis-match";
        rpwd.style.color= "red";
        document.getElementById("pLabel2").style.color= "red";
        return false;                                                                            
                                                          
      }
    }
      
                                                          
  }
                                                  
                                                    
  }
