function validate()  // JS validating the function Phone number - NAME
{



var nn=document.getElementById("Namee").value;


// var re=/^ [^0-9]+ $/.test(nn)   

if (nn==0){
  document.getElementById("NameE").innerHTML="Name Can't be empty"
  return false;
}
else if(nn.length<3)
{
  document.getElementById("NameE").innerHTML="Length min 3 charecter"
  return false;
}

else if(nn.length>20)
{
  document.getElementById("NameE").innerHTML="Length max 20 charecter"
  return false;
}

// else if(re==false)
// {
//   document.getElementById("NameER").innerHTML="Only Alphabets"
//   return false;
// }






//  E-mail-------------------------------------------------------------------------
  
var  em=document.getElementById("Emaill").value  

if(em==0){
  document.getElementById("EmailE").innerHTML="Email can't be empty"
  return false
}


var r = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em) //true or false pattern saved -- check condition
if(r==false){
  document.getElementById("EmailE").innerHTML="invalid pattern"
return false
}

// PHNO--------------------------------------------------


        
          var ph=document.getElementById("Contactt").value // value inserted into id ele binded

          if(ph.length==0){ //variable length
            document.getElementById("Contactt").innerHTML="ph cant be empty"
            return false
          }  //imp cmt
          else if(isNaN(ph)) // isNaN() NOT A NUMBER() method(val process var)
          {
            document.getElementById("NumE").innerHTML="phone number should have numbers only"

            document.getElementById("Contactt").style.border="5px solid red"
            document.getElementById("Contactt").style.backgroundColor="green"
            document.getElementById("Contactt").style.color="red"
            document.getElementById("Contactt").innerHTML=res //not sure 
            

            return false //if not it will come n googo op
        }//if its equal to 10 we dont want msg (rev java script ee)
        else if(ph.length<10){
            document.getElementById("NumER").innerHTML="phone number should not less than 10"

            document.getElementById("Contact").style.border="5px solid red"
            document.getElementById("Contact").style.backgroundColor="green"
            document.getElementById("Contact").style.color="red"
            document.getElementById("Contact").innerHTML=res //not sure 
            

             return false
        }
        else if(ph.length>10){
             document.getElementById("NumER").innerHTML="phone number should not be grater than 10"
            
             
             document.getElementById("Contact").style.border="5px solid red"
             document.getElementById("Contact").style.backgroundColor="green"
             document.getElementById("Contact").style.color="red"
             document.getElementById("Contact").innerHTML=res //not sure 
             
             return false
        }
          
             var res= /^[6-9]{1}[0-9]{9}$/.test(ph)

             if(res==false)
             {
             document.getElementById("NumER").innerHTML=" Phone not valid invalid pattern"
         
              document.getElementById("Contact").style.border="5px solid red"
              document.getElementById("Contact").style.backgroundColor="green"
              document.getElementById("Contact").style.color="red"
              document.getElementById("Contact").innerHTML=res //not sure 

              return false
             }
            }
        
      
          


//''''''''''''''''''''''''''''''''''''''''

function validate0()  // JS validating the function Phone number - NAME
{



var nn=document.getElementById("Name").value;


// var re=/^ [^0-9]+ $/.test(nn)   

if (nn==0){
  document.getElementById("NameER").innerHTML="Name Can't be empty"
  return false;
}
else if(nn.length<3)
{
  document.getElementById("NameER").innerHTML="Length min 3 charecter"
  return false;
}

else if(nn.length>20)
{
  document.getElementById("NameER").innerHTML="Length max 20 charecter"
  return false;
}

// else if(re==false)
// {
//   document.getElementById("NameER").innerHTML="Only Alphabets"
//   return false;
// }






//  E-mail-------------------------------------------------------------------------
  
var  em=document.getElementById("Email").value  

if(em==0){
  document.getElementById("EmailER").innerHTML="Email can't be empty"
  return false
}


var r = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em) //true or false pattern saved -- check condition
if(r==false){
  document.getElementById("EmailER").innerHTML="invalid pattern"
return false
}


//  Age---------------------------------------------------

var  em=document.getElementById("Age").value
var val=/^[0-9]{2}$/.test(em);

if(val==false){
document.getElementById("AgeER").innerHTML="Only 2 digits";
return false;
}


// DOB-------------------------------------------------

var DB=document.getElementById("DOB");
if( DB.value===""){
  document.getElementById("DOBER").innerHTML="INVALID DATE"
  return false;
} 


// function validatequalification() {
//   var qualificationInputs = document.getElementsByName("oneselect");
//   var isQualificationSelected = false;

//   for (var i = 0; i < qualificationInputs.length; i++) {
//     if (qualificationInputs[i].checked) {
//       isQualificationSelected = true;
    
//       break;
    
//     }
// }

// }
// var qualificationError = document.getElementById("QuaER");

// if (!isQualificationSelected) {
//   qualificationError.textContent = "Please select at least one qualification option.";
// } else {
//   qualificationError.textContent = ""; // Clear the error message
//   // The form is valid; you can proceed with your submission logic
//   alert("Form is valid. Submitting...");
//   document.getElementById("qualificationForm").submit(); // You can remove this line or replace it with your form submission logic
// }
// }

}
          


