

// Validate code

$(document).ready(function() {
  // mob hamburger
	$(".hamburger-btn .fa-times").hide();

	$(" .hamburger-btn .fa-bars").click(function(){
		$(this).hide();
		$(".hamburger-btn .fa-times").show();
		$("nav.mob ul").addClass("active");
	});

	 $(" .hamburger-btn .fa-times").click(function(){
		$(this).hide();
		$(".hamburger-btn .fa-bars").show();
		$("nav.mob ul").removeClass("active");

	});

				$('#name').keyup(() =>{
					validateName();
				});

				$('#email').keyup(() =>{
					validateEmail();
				});


				$('#tele').keyup(() => {
					validatePhone();
				});

				$('#textarea').keyup(() =>{
					validateMessage();
				});

      // Avoid website refesch
				$("#prospects_form").submit(function(e) {
		    e.preventDefault();
			});

			// LocalStorage
			$("#textarea").focusout(function regText() {

				var tData = document.getElementsByClassName("textarea").value;
				localStorage.setItem("text", tData);

			});

			$("input").focusout(function regData() {

				var nameData = document.getElementById("name").value;
				localStorage.setItem("name", nameData);

				var emailData = document.getElementById('email').value;
				localStorage.setItem("email", emailData);

				console.log(nameData, emailData);

			});

});


function validateName() {
 var name = document.getElementById('name').value;

			if(name.length == 0) {
				producePrompt('Name is Required', 'namePrompt', 'red' );
				return false;
			}
			if(!name.match(/^[a-zA-ZäöåÄÖÅ '-]{3,}$/)) {
				producePrompt('First and last name please', 'namePrompt', 'red');
				return false;
			} else {
				producePrompt('Name is Valid', 'namePrompt', 'green');
				return true;
			}
}


function validateEmail() {
	var email = document.getElementById('email').value;

	if(email.length == 0) {
		producePrompt('Email is Required', 'emailPrompt', 'red');
		return false;
	}
	if(!email.match(/^[A-Za-z\._\=0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
			producePrompt('Email Invalid', 'emailPrompt', 'red')
			return false;
	} else {
			producePrompt('Valid Email Adress', 'emailPrompt', 'green');
 }
}


function validatePhone() {
 var phone = document.getElementById('tele').value;

			if(phone.length == 0) {
				producePrompt('Phone is Required', 'phonePrompt', 'red' );
				return false;
			}
			if(!phone.match(/^((((0{2}?)|(\+){1})46)|0)7[\d]{8}/)) {
				producePrompt('Phone Invalid', 'phonePrompt', 'red');
				return false;
			} else {
				producePrompt('Phone is Valid', 'phonePrompt', 'green');
				return true;
			}
}


/*
 * Required Characters = 30
 *
 * 0 - 30
 * 1 - 29
 * 2 - 28
 * 3 - 27
 * 4 - 26
 *
 * left = required - currentLength
 */

 function validateMessage() {
	 	var messege = document.getElementById('textarea').value;
		var required = 30;
		var left = required - messege.length;

		if(left > 0){
			producePrompt(left + " Characters Required", 'textPrompt', 'red');
			return false;
		}


		producePrompt('Valid Comment', 'textPrompt', 'green');
		return true;
 }


 function validateForm() {

	 if(!validateName() || !validateEmail() || !validateMessage() || !validatePhone()) {

		 jsShow('submitPrompt');
		 producePrompt('Form Must Be Valid To Be Send', 'submitPrompt', 'red');
		 setTimeout(function(){jsHide('submitPrompt');}, 3000);

	 }
	  if(validateName() && validateEmail() || validateMessage()) {

			document.getElementById("submitPrompt").innerHTML = "Form is Submit";
			document.getElementById("submitPrompt").style.color = 'green';
			document.getElementById("prospects_form").reset();

		}
 }


 function jsShow(id) {

 	document.getElementById(id).style.display ='block';
 }

 function jsHide(id) {

 	document.getElementById(id).style.display ='none';
 }




function producePrompt(message, promptLocation, color) {
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;

}


// JSON GITHUB TRENDER

fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc')
	.then(response => response.json()) //calling JSON
	.then(data => { //reading JSON

 for(i = 0; i < 5; i++){ //for loop to read the JSON nodes.

	 var container = data.items[i]; //data is the first node. And making a copy of the node with the local variabel "container"

	 var name = container.name; //this takes data from the inside of node, this case is called name
	 var stars = container.stargazers_count;
	 var boss = container.owner.login; // Same process, but here are we a deeper step inside the nodes.
	 var link = container.owner.html_url;
	 var link_git = container.html_url;

	  $('#js-owner').append("<br>Owner: <a target=" + "'_blank'" + "href='" + link + "'>" + "<strong>" + boss + "</strong>" + "</a>" + "<br>Project: <a target=" + "'_blank'" + "href='" + link_git + "'>" + "<strong>" + name + "</strong>" + "</a>" + "<br>Stars: " + stars);
    //I call the div with th id ="js-owner" and with the append method, the method will insert specified content at the end of the selected elements. In this case we make string with brackets and call the local variabels from inside the loop.
 }

});

fetch('https://api.github.com/search/repositories?q=language:css&sort=stars&order=desc')
	.then(response => response.json())
	.then(data => {

 for(i = 0; i < 5; i++){

	 var container = data.items[i];

	 var name = container.name;
	 var stars = container.stargazers_count;
	 var boss = container.owner.login;
	 var link = container.owner.html_url;
	 var link_git = container.html_url;

	  $('#css-owner').append("<br>Owner: <a target=" + "'_blank'" + "href='" + link + "'>" + "<strong>" + boss + "</strong>" + "</a>" + "<br>Project: <a target=" + "'_blank'" + "href='" + link_git + "'>" + "<strong>" + name + "</strong>" + "</a>" + "<br>Stars: " + stars);
 }

});
$(document).ready(function(){
		$("button").click(function(){
				var div = $("div");
				div.animate({opacity: '0.5',}, "slow");
		});
		$("button").click(function(){
			var div = $("div");
				div.animate({opacity: '2.5'}, "slow");
		});

});

// slideshow code
let indice = 1;
showSlides(indice);

function forwardSlide(n){
	showSlides(indice+=n);
}

function posicionSlide(n){
	showSlides(indice=n);
}
setInterval(function tiempo(){
    showSlides(indice+=1);
}, 2000);

function showSlides(n){
	let i;
	let slides = document.getElementsByClassName("miSlider");
	let barras = document.getElementsByClassName("counter");

	if(n > slides.length){
		indice = 1;
	}

	if(n < 1) {
		indice = slides.length();
	}

	for(i = 0; i < slides.length; i++){
		slides[i].style.display ='none';
	}

	for(i = 0; i < barras.length; i++){
      barras[i].className = barras[i].className.replace(" active", "");
	}

	slides[indice-1].style.display = 'block';
	barras[indice-1].className += ' active';

}
