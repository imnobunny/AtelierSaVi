$(document).ready(() =>{
	$('.see-btn').on('click', () => {
		$('.hide-post').show();
		$('.see-btn').hide();
		$('.hide-btn').show();
		$('.hide-post').css("display", "flex");
	})

	$('.hide-btn').on('click', () => {
		$('.hide-post').hide();
		$('.see-btn').show();
		$('.hide-btn').hide();
	})

	$(".nav-item .nav-link").on("click", function(){
	   $(".nav-item").find(".active").removeClass("active");
	   $(this).addClass("active");
});

})

// function MessageReceived() {
// 	alert("We will get back to you shortly.")
// }

let name = document.querySelector("#name");
let nameValue = name.value;
let email = document.querySelector("#email");
let emailValue = email.value;
let contact = document.querySelector("#contact");
let contactValue = contact.value;

labelName = document.querySelector("#nameError");
labelEmail = document.querySelector("#emailError");
labelContact = document.querySelector("#contactError");

let pName = document.createElement("P");
let pEmail = document.createElement("P");
let pContact = document.createElement("P");

let hasName = false;
let hasEmail = false;
let hasContact = false;

document.querySelector("#btn-send").addEventListener("click", function(){
	if (nameValue.length <= 0){
		pName.innerHTML= "Name is required";
		pName.classList.add("class","error");
		labelName.appendChild(pName);
	} else {
		pName.innerHTML="";
		hasName = true;
	}


	if (!emailValue.includes("@") || !emailValue.includes(".com")){
		pEmail.innerHTML= "Invalid E-mail address";
		pEmail.classList.add("class","error");
		labelEmail.appendChild(pEmail);
	} else {
		pEmail.innerHTML= "";
		hasEmail = true;
	}

	if (contactValue.length <= 0){
		pContact.innerHTML= "Contact Number is required";
		pContact.classList.add("class","error");
		labelContact.appendChild(pContact);
	} else {
		pContact.innerHTML= "";
		hasContact = true;
	}

	if (hasName && hasEmail && hasContact){
		alert(`Hello ${nameValue}, your message has been sent!`);
	}

});
	
console.log(nameValue);
console.log(emailValue);
console.log(contactValue);