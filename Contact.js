function validateFormContact() {
  var save= document.forms["myForm"]["save"].value;
  var fname = document.forms["myForm"]["fname"].value;
  var lname = document.forms["myForm"]["lname"].value;
  var email = document.forms["myForm"]["email"].value;
  var message = document.forms["myForm"]["message"].value;
   
    if (save == "") {
      alert( "Please fill in the empty spaces!");
    return false;
  }
    if (fname == "") {
      alert("Please fill in the first name!");
      return false;
    }
    
    if (lname == "") {
        alert( "Please fill in the last name!");
      return false;
    }
    
    if (email == "") {
        alert( "Please fill in the email!");
      return false;
    }
    
    if (message == "") {
        alert( "Please fill in the message!");
      return false;
    }
  else{
    alert("Your data has been successfully registered!");
  }
}