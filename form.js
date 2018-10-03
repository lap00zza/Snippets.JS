 //to toggle Show Password Option
 function showpsw() {
    var y = document.getElementById("password");
    if(y.type==="password"){
      y.type="text";
    }else{
      y.type="password";
    }
     }

   function validation(){
   	var email=document.getElementById("email");
   	var phone_no=document.getElementById("phone_no");
   	var password=document.getElementById("password");
   	if(valid_email(email)){
   		if (valid_phone_no(phone_no)){
   			if (valid_password(password,8,12)){

   			}
   		}
   	}
   	return false;
   }
   //validate phone number
   function valid_phone_no(user_phone_no) {
   var user_phone_no_length=user_phone_no.value.length;
   var phone_no_pattern= /^[0-9]+$/;
   if(user_phone_no_length==10&&user_phone_no.value.match(phone_no_pattern)){
   	return true;
   }else{
   alert("invalid phone number");
    return false;
   }

   }
//validate password
   function valid_password(user_password,a,b){
    var user_password_length=user_password.value.length;
   
    if(user_password_length==0||user_password_length>=b||user_password_length<=a){
    	alert("Password should be 8 to 12 characters long");
    	user_password.focus();
    	return false;
    }
      return true;
   }

//validate email
   function valid_email(user_email){
   	var email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
   	if(user_email.value.match(email_pattern)){
      return true;
   	}
   	else{
   		alert("Invalid e-mail address");
   		user_email.focus();
   		return false;
   	}
   }
