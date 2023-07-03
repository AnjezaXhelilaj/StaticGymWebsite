//Js
document.querySelector(".mobile-btn").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("active");
  });




  

//Login form start
  function registration()
	{

		var name= document.getElementById("t1").value;
		var email= document.getElementById("t2").value;
		var uname= document.getElementById("t3").value;
		var pwd= document.getElementById("t4").value;			
		var cpwd= document.getElementById("t5").value;
		
		
		
		
		
        //email id expression code
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(name=='')
		{
			alert('Please enter your name');
		}
		else if(!letters.test(name))
		{
			alert('Name field required only alphabet characters');
		}
		else if(email=='')
		{
			alert('Please enter your user email id');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}
		else if(uname=='')
		{
			alert('Please enter the user name.');
		}
		else if(!letters.test(uname))
		{
			alert('User name field required only alphabet characters');
		}
		else if(pwd=='')
		{
			alert('Please enter Password');
		}
		else if(cpwd=='')
		{
			alert('Enter Confirm Password');
		}
		else if(!pwd_expression.test(pwd))
		{
			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
		}
		else if(pwd != cpwd)
		{
			alert ('Password not Matched');
		}
		else if(document.getElementById("t5").value.length < 6)
		{
			alert ('Password minimum length is 6');
		}
		else if(document.getElementById("t5").value.length > 12)
		{
			alert ('Password max length is 12');
		}

		
		
	 


		else
		{				                            
               alert('Thank You for Login & You are Redirecting to FEUT');
			   // Redirecting to other page or webste code. 
			   window.location = "http://www.feut.edu.al"; 
		}
	}
	function clearFunc()
	{
		document.getElementById("t1").value="";
		document.getElementById("t2").value="";
		document.getElementById("t3").value="";
		document.getElementById("t4").value="";
		document.getElementById("t5").value="";
		document.getElementById("t10").value="";
		document.getElementById("file").value="";

		
		
		
	}


//Login form ends




	
//Function to display a promo code
function discount() {
	var promo = document.getElementById("special");
	promo.firstChild.nodeValue = "Promo Code: D25START";
	promo.style.color = "#ff0000";
	promo.style.fontSize = "2em";
}


//Function to display the burpees example video
function burpees() {
	videoSource.src = "burpees.mp4";
	descriptionSource.src = "media/burpees-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

//Function to display the plank example video
function plank() {
	videoSource.src = "plank.mp4";
	descriptionSource.src = "plank-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

//Function to display the mountain climbers example video
function mountain() {
	videoSource.src = "mc.mp4";
	descriptionSource.src = "media/mountain-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

//Global variables for about us page
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");


//BMI calculation
var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{
    
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2); 
    result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "Your BMI falls within the underweight range";    
    }else if((BMI > 18.5) && (BMI <= 24.9)){
        statement.innerText = "Your BMI falls within the normal or healthy weight range";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        statement.innerText = "Your BMI falls within the overweight range";
    }else{
        statement.innerText = "Your BMI falls within the obese range";
    }
});

//BMI calculation ends




//phone number validation start

function phonenumber(inputtxt)
{
  var phoneno = /^\d{3}-\d{7}$/;
  if(inputtxt.value.match(phoneno))
     {
		inputtxt.setCustomValidity('Valid phone number');
	 }
   else
     {
		inputtxt.setCustomValidity('Not Valid! Try this format: xxx-xxxxxxx');
	   return false;
     }
}

//phone number validation end




//drag and drop start

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

/** @param {Event} event */
function handleSubmit(event) {
	const url = new URL(form.action);
	const formData = new FormData(form);
  
	/** @type {Parameters<fetch>[1]} */
	const fetchOptions = {
	  method: form.method,
	  body: formData,
	};
  
	fetch(url, fetchOptions);
  
	event.preventDefault();
  }


//drag and drop ends