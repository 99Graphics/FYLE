$(function(){var count = document.getElementsByClassName("tabFyle"); $('.tottle-no-step').text(count.length); $(window).scroll(function(){var a=$(window).scrollTop();if(a>=70){$(".navbar").addClass("sticky-header")}else{$(".navbar").removeClass("sticky-header")}})});$(function(){var b=$("#networks");b.owlCarousel({loop:false,margin:0,nav:true,dots:false,autoplay:true,autoplayTimeout:6000,smartSpeed:500,onInitialized:a,onTranslated:a,responsive:{0:{items:1},600:{items:1},768:{items:1},1000:{items:1}}});$(".owl-prev").html('<i class="fas fa-chevron-left"></i>');$(".owl-next").html('<i class="fas fa-chevron-right"></i>');function a(f){var d=f.target;var c=f.item.count;var e=f.item.index+1;$("#counter").html(""+e+"/"+c)}});$("#support").owlCarousel({loop:true,margin:0,nav:true,dots:false,autoplay:true,autoplayTimeout:6000,smartSpeed:500,responsive:{0:{items:1},600:{items:1},768:{items:2},1000:{items:3}}});$(".owl-prev").html('<i class="fas fa-long-arrow-alt-left"></i>');$(".owl-next").html('<i class="fas fa-long-arrow-alt-right"></i>');jQuery(function(a){if(a(window).width()>1199){a(".navbar .dropdown").hover(function(){a(this).find(".dropdown-menu").first().stop(true,true).delay(250).slideDown()},function(){a(this).find(".dropdown-menu").first().stop(true,true).delay(100).slideUp()});a(".navbar .dropdown > a").click(function(){location.href=this.href})}});jQuery(document).ready(function(a){a(".navbar-nav li.dropdown a").click(function(b){a(this).next("ul.dropdown-menu").css("display","block");b.stopPropagation()})});$(document).ready(function(){$(".navbar-nav .nav-item.dropdown").append('<a href="" class="dropdown-toggle cutomedrop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-chevron-down"></i></a>')});$(document).ready(function(){$(".wraper-pricing").each(function(){var a=0;$(".pricing-bx",this).each(function(){if($(this).height()>a){a=$(this).height()}});$(".pricing-bx",this).height(a)})});$(document).ready(function(){$(window).scroll(function(){if($(this).scrollTop()>100){$(".scrollup").fadeIn()}else{$(".scrollup").fadeOut()}});$(".scrollup").click(function(){$("html, body").animate({scrollTop:0},600);return false})});
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tabFyle");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    //document.getElementById("prevBtn").style.display = "none";
  } else {
   // document.getElementById("prevBtn").style.display = "inline";
  }
 /*  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Get a demo";
  } else {
    document.getElementById("nextBtn").innerHTML = "Enter";
  } */
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}
function nextPrev(n) {
	 var email = $('#email-form').val();
	 var fname = $('#fname').val();
	 // This function will figure out which tab to display
    var x = document.getElementsByClassName("tabFyle");
	// Exit the function if any field in the current tab is invalid:
	if (n == 1 && !validateForm()) return false;
	
	// Hide the current tab:
	x[currentTab].style.display = "none";
   // Increase or decrease the current tab by 1:
	currentTab = currentTab + n;
    $('.textname').text(fname);
  
  // console.log(x.length);
  if(currentTab >= 5 ) {
		$('#nextBtn').attr('onclick','');
		$('.arrow-down-div').attr('onclick',''); 
		$(".arrow-down-div").css("opacity",'0.7');
		 console.log('currentTab >=5 ---------------------',currentTab);
	} else {
		$('.arrow-down-div').attr('onclick','downbtnPrev(1)'); 
		$(".arrow-down-div").css("opacity",'1');
		$('#nextBtn').attr('onclick','nextPrev(1)');  
		 
		$(".arrow-up-div").css("opacity",'1');
		$(".arrow-up-div").attr('onclick','downbtnPrev(-1)'); 
		 console.log('else currentTab >=5 ---------------------',currentTab);
	} 
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
	 // ... the form gets submitted:
    document.getElementById("tabFyle").submit();
    return false;
  }
  // console.log('sss1>',i);
  // Otherwise, display the correct tab:
  showTab(currentTab);
  
}
function downbtnPrev(n) {
	
	var fname = $('#fname').val();
	// This function will figure out which tab to display
	var x = document.getElementsByClassName("tabFyle");
	//if (n == 1 && !validateForm()) return true;
	// Hide the current tab:
	x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
	currentTab = currentTab + n;
	$('.textname').text(fname);
	  if(currentTab > 0) {
		  $('.arrow-up-div').attr('onclick','downbtnPrev(-1)');
		  $(".arrow-up-div").css("opacity",'1');
	  } else {
		$('.arrow-up-div').attr('onclick','');
		$(".arrow-up-div").css("opacity",'0.7');
	  }
	//  console.log(currentTab);
	if(currentTab >= 5 ) {
		$('#nextBtn').attr('onclick','');
		$('.arrow-down-div').attr('onclick',''); 
		$(".arrow-down-div").css("opacity",'0.7');
	} else {
		$('.arrow-down-div').attr('onclick','downbtnPrev(1)'); 
		$(".arrow-down-div").css("opacity",'1');
		$('#nextBtn').attr('onclick','nextPrev(1)');  
	}	
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
	 // ... the form gets submitted:
    document.getElementById("tabFyle").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);

}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tabFyle");
  y = x[currentTab].getElementsByTagName("input");
  //y = x.getElementsByTagName("input");
  var email = $('#email-form').val();
  // A loop that checks every input field in the current tab:
	var splashArray = new Array();
  for (i = 0; i < y.length; i++) {
	  console.log(currentTab);
	  if(currentTab == 0){
		 if (validateEmail(email)) { valid = true ; } else {
			$('.error').text("Please enter valid email");
			$('.error').css("color", "red");
			valid = false;
		}
	  }
	// If a field is empty...
    if (y[i].value == "") {
		
		
      // add an "invalid" class to the field:
      y[i].className += " invalid";
	  // and set the current valid status to false
      valid = false;
    } 

  }
  
  var emptyTextCheckboxAndSelect = $('.tabFyle input').filter(function(){

    if($(this).attr('type') === "radio"){
        return false;//we'll check for empty radio groups elsewhere        
    }

    if($(this).attr('type') === "checkbox"){
        return $(this).prop("checked");
    }

    return $(this).val();//this only works for select if default option explicitly sets value=""

}).length;

var radioNameHash = {},
    uncheckedRadioButtonGroups = 0;

$('.tabFyle input[type="radio"]').each(function(i, radioButton){

    if(radioNameHash[$(this).attr('name')] === undefined){
        //uncheckedRadioButtonGroups++;
        radioNameHash[$(this).attr('name')] = true;
    }

    if($(this).prop("checked") == true){
        uncheckedRadioButtonGroups++;
    }
});

var totalUnfilledFields = emptyTextCheckboxAndSelect + uncheckedRadioButtonGroups;
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
	  
	  setTimeout(function(){ 
	 // console.log('sss0>',splashArray);	
		$('.step-no').text(totalUnfilledFields);
		var persantage = 100 / x.length;
		var persantagetottle = persantage * totalUnfilledFields;
		$('#progress-bar').css("width",persantagetottle+'%');
	 }, 200);
	 
	
    //document.getElementsByClassName("step")[currentTab].className += " finish";
	/* if(totalUnfilledFields >= 5 ) {
		$('.arrow-down-div').attr('onclick',''); 
		$(".arrow-down-div").css("opacity",'0.7');
	} else {
		$('.arrow-down-div').attr('onclick','downbtnPrev(1)'); 
		$(".arrow-down-div").css("opacity",'1');
	} */
	
	/* if(totalUnfilledFields == x.length - 1 ) {
		$('.arrow-down-div').attr('onclick',''); 
		$(".arrow-down-div").css("opacity",'0.7');
	} else {
		$('.arrow-down-div').attr('onclick','downbtnPrev(1)'); 
		$(".arrow-down-div").css("opacity",'1');
	}  */
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
 /*  x[n].className += " active";
  console.log(x[n]); */
  
}