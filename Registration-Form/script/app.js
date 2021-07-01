const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function validateForm() {
 
  var em=document.getElementById("email").value; 
  var atpos=em.indexOf("@"); 
  var dotpos=em.lastIndexOf("."); 
  var fname=document.getElementById("firstname").value;
  console.log("innnnnn")
  
  let x = fname;
  if( x.value == "")
  {
    console.log("innnn")
    alert("First Name must be filled out");
    return false;
  }

  let y = document.getElementById("lname").value;
  if(y.value == "")
  {
    console.log("innnn")
    alert("Last Name must be filled out");
    return false;
  }
  
  let u = document.getElementById("uname").value;
  if( u.value == "")
  {
    console.log("innnn")
    alert("User Name must be filled out");
    return false;
  }

  if(atpos<1 || dotpos<atpos+2 || dotpos+2>=em.length)
  {
  alert("Ivalid Email ID");
  return false;
  }


  let pass1=document.getElementById("passi1").value;
  let pass2=document.getElementById("passi2").value;
  if(pass1 == "")
    {
      alert('Please Input Password');
      
      return false;
    }	
    
    if(pass1.length < 6) 
    {
      alert('Password strength Should Not be less than 6 characters');
      
      return false;
    }	

    
    if(pass2== "") 
    {
      alert('Please Retype Password for Confirmation');		
      return false;
    }	

    if(pass1 != pass2) 
    {
      alert('Confirmation Password Didnt Match');	
      return false;
    }
 
    alert('Successfully Submitted Form');
    document.form.submit();
 }


